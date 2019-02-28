import React, { Component, Fragment } from 'react'

import Button from '../../../../../common/Button'
import NoteContent from './NoteContent'

import { componentClassNames } from '../../../../../helpers'
import { COLORS } from '../../../../../globals'
import { submitFields } from '../helpers'
import { propTypes } from './props'
import initState from './initState'
import { includes } from 'lodash'

import './index.css'

const bem = componentClassNames('Note')

export default class Note extends Component {
  static propTypes = propTypes
  constructor(props) {
    super(props)
    this.state = initState(props.title, props.note)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.cancelEdit = this.cancelEdit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  toggleEdit = () => this.setState(
    ({ edit }) => ({ edit: !edit, isEditing: false })
  )
  cancelEdit = () => this.setState(
    (state, { title, note }) => ({ fields: { title, note } }),
    this.toggleEdit
  )
  handleInputChange = field => event => this.setState(
    ({ fields }) => ({
      fields: {
        ...fields,
        [field]: event.target.value
      }
    })
  )
  handleSubmit = () => {
    const { props, state, toggleEdit } = this
    const { putNote, _id, type, color, dateCreated, listItems, pinned, hidden } = props
    const { title, note } = state.fields
    if (title === props.title && note === props.note) {
      toggleEdit()
    } else {
      this.setState(
        { isEditing: true },
        putNote(
          submitFields({ _id, type, title, note, color, dateCreated, listItems, pinned, hidden }),
          res => this.setState(initState(res.data.title, res.data.note))
        )
      )
    }
  }
  render() {
    const { props, state, toggleEdit, cancelEdit, handleInputChange, handleSubmit } = this
    const { pinnedLoading, deleteLoading, togglePinned, deleteNote, _id, pinned, color } = props
    const { edit, isEditing, fields } = state
    const { title, note } = fields
    const isDeleting = includes(deleteLoading, _id)
    const isPinning = includes(pinnedLoading, _id)
    const noteInnerStyle = { backgroundColor: color, borderColor: color === COLORS[0] ? COLORS[1] : color }
    const buttonProps ={ padding: 3, loadingSize: 24 }
    return (
      <div className={bem('')}>
        <div className={bem('inner')} style={noteInnerStyle}>
          <Button
            className={bem('close')}
            icon="close"
            iconClassName={bem('close-icon')}
            padding={0}
          />
          <NoteContent {...{ toggleEdit, handleInputChange, title, note, edit }} />
          <div className={bem('actions')}>
            {edit ? <Fragment>
              <Button
                onClick={handleSubmit}
                icon="save"
                text="Save"
                textClassName={bem('edit-text')}
                loading={isEditing}
                {...buttonProps}
              />
              <Button
                onClick={cancelEdit}
                disabled={isEditing}
                icon="done"
                text="Cancel"
                textClassName={bem('edit-text')}
                loading={isPinning}
                {...buttonProps}
              />
            </Fragment> : <Fragment>
              <Button
                onClick={togglePinned(_id)}
                disabled={isDeleting}
                className={bem('icon')}
                icon={pinned ? 'turned_in' : 'turned_in_not'}
                loading={isPinning}
                {...buttonProps}
              />
              <Button
                onClick={deleteNote(_id)}
                disabled={isPinning}
                className={bem('icon')}
                icon="delete"
                loading={isDeleting}
                {...buttonProps}
              />
              <Button
                onClick={toggleEdit}
                disabled={isPinning || isDeleting}
                className={bem('icon')}
                icon="edit"
                loading={isEditing}
                {...buttonProps}
              />
            </Fragment>}
          </div>
        </div>
      </div>
    )
  }
}
