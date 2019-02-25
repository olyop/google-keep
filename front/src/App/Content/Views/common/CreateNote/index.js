import React, { Component} from 'react'

import CustomButton from '../../../../../common/Button'
import ContentEditable from 'react-contenteditable'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'

import { classNames, componentClassNames } from '../../../../../helpers'
import { withStyles } from '@material-ui/core/styles'
import { COLORS } from '../../../../../globals'
import { checkCanSubmit } from './helpers'
import { submitFields } from '../helpers'
import { propTypes } from './props'
import initState from './initState'
import styles from './styles'

import './index.css'

const bem = componentClassNames('CreateNote')

class CreateNote extends Component {
  static propTypes = propTypes
  constructor(props) {
    super(props)
    this.state = initState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.initState = this.initState.bind(this)
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
  render() {
    const { props, state, handleChange, handleSubmit, initState } = this
    const { className, classes } = props
    const { submitting, fields } = state
    const { title, note, pinned, color } = fields
    const canSubmit = checkCanSubmit(fields)
    return (
      <div {...classNames(className, 'CreateNote')}>
        <input
          {...bem('title')}
          value={title}
          onChange={handleChange('title')}
          type="text"
          placeholder="Title"
        />
        <div {...bem('textarea')}>
          <ContentEditable
            {...bem('note')}
            html={note}
            onChange={handleChange('note')}
          />
          {note === '' ? <div {...bem('placeholder')}>Take a note...</div> : null}
        </div>
        <div {...bem('actions')}>
          <div {...bem('buttons')}>
            <CustomButton
              onClick={handleSubmit}
              disabled={!canSubmit}
              text="Save"
              textClassName="CreateNote__cancel"
              icon="save"
              loading={submitting}
              loadingSize={24}
              className="CreateNote__save"
              border="1px solid #E0E0E0"
              borderRadius="5px"
              padding={8}
            />
            <Select
              value={color}
              onChange={handleChange('color')}
              input={<Input classes={{ underline: classes.selectInput }} />}
            >
              {COLORS.map(color => (
                <MenuItem key={color} value={color} style={{ paddingLeft: 11 }}>
                  <div {...bem('color-item')} style={{ backgroundColor: color }} />
                </MenuItem>
              ))}
            </Select>
            <CustomButton
              onClick={initState}
              text="Cancel"
              textClassName="CreateNote__cancel"
              padding="12px 8px"
            />
          </div>
          <div {...bem('settings')}>
            <CustomButton
              onClick={handleChange('pinned', true)}
              icon={pinned ? 'turned_in' : 'turned_in_not'}
              iconClassName="CreateNote__settings-icon"
              padding={7}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(CreateNote)
