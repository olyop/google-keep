import React, { Component } from 'react'

import CreateNoteActions from './CreateNoteActions'
import CreateNoteInputs from './CreateNoteInputs'

import { componentClassNames } from '../../../../../helpers'
import { checkCanSubmit, updateListItems } from './helpers'
import { withStyles } from '@material-ui/core/styles'
import { submitFields } from '../helpers'
import { propTypes } from './props'
import initState from './initState'
import { find } from 'lodash'
import styles from './styles'

import './index.css'

const bem = componentClassNames('CreateNote')

class CreateNote extends Component {
  constructor(props) {
    super(props)
    this.state = initState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.initState = this.initState.bind(this)
    this.toggleList = this.toggleList.bind(this)
    this.handleListChange = this.handleListChange.bind(this)
    this.toggleListItemChecked = this.toggleListItemChecked.bind(this)
  }
  handleChange = (camelCase, isBool = false) => event => {
    const { value } = event.target
    this.setState(
      ({ fields }) => ({
        fields: {
          ...fields,
          [camelCase]: isBool ? !fields[camelCase] : value
        }
      })
    )
  }
  initState = () => this.setState(
    initState
  )
  handleSubmit = () => this.setState(
    { submitting: true },
    this.props.handleSubmit(
      submitFields(this.state.fields),
      res => this.initState()
    )
  )
  toggleList = () => this.setState(
    ({ type }) => ({ type: type === 'note' ? 'list' : 'note' })
  )
  updateListItem = data => this.setState(
    ({ fields }) => ({
      fields: {
        ...fields,
        listItems: updateListItems(fields.listItems, data)
      }
    })
  )
  handleListChange = index => () => {
    const listItem = find(this.state.fields.listItems, { index })
    console.log(index)
  }
  toggleListItemChecked = index => () => {
    const listItem = find(this.state.fields.listItems, { index })
    console.log(index)
  }
  render() {
    const { props, state, handleChange, handleSubmit, initState,
            toggleList, handleListChange, toggleListItemChecked } = this
    const { className, classes } = props
    const { submitting, fields } = state
    const { title, note, pinned, type, color, listItems } = fields
    const canSubmit = checkCanSubmit(fields)
    return (
      <div className={bem({ ignore: true, className }, '')}>
        <CreateNoteInputs
          {...{ handleChange, handleListChange, toggleListItemChecked, type, title, note, listItems }}
        />
        <CreateNoteActions
          {...{ handleSubmit, initState, toggleList, handleChange,
          canSubmit, submitting, color, classes, pinned, type }}
        />
      </div>
    )
  }
}

CreateNote.propTypes = propTypes

export default withStyles(styles)(CreateNote)
