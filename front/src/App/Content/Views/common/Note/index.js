import React, { Component, Fragment } from 'react'

import CustomButton from '../../../../../common/Button'
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
    const { putNote, _id, type, color, dateCreated, listItems, pinned } = props
    const { title, note } = state.fields
    if (title === props.title && note === props.note) {
      toggleEdit()
    } else {
      this.setState(
        { isEditing: true },
        putNote(
          submitFields({ _id, type, title, note, color, dateCreated, listItems, pinned }),
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
      <div {...bem('')}>
        <div {...bem('inner')} style={noteInnerStyle}>
          <NoteContent {...{ toggleEdit, handleInputChange, title, note, edit }} />
          <div {...bem('actions')}>
            {edit ? <Fragment>
              <CustomButton
                onClick={handleSubmit}
                icon="save"
                text="Save"
                loading={isEditing}
                {...buttonProps}
              />
              <CustomButton
                onClick={cancelEdit}
                disabled={isEditing}
                icon="done"
                text="Cancel"
                loading={isPinning}
                {...buttonProps}
              />
            </Fragment> : <Fragment>
              <CustomButton
                onClick={togglePinned(_id)}
                disabled={isDeleting}
                icon={pinned ? 'turned_in' : 'turned_in_not'}
                loading={isPinning}
                {...buttonProps}
              />
              <CustomButton
                onClick={deleteNote(_id)}
                disabled={isPinning}
                icon="delete"
                loading={isDeleting}
                {...buttonProps}
              />
              <CustomButton
                onClick={toggleEdit}
                disabled={isPinning || isDeleting}
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
