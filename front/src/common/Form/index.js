import React, { Component } from 'react'

import Fields from './Fields'
import Submit from './Submit'

import { serializeFields, errState, checkIfErrors, reduceToErrState, newState } from './helpers'
import { propTypes, defaultProps } from './props'
import { componentClassNames } from '../../helpers'
import { toNumber } from 'lodash'

import './index.css'

const bem = componentClassNames('Form')

class Form extends Component {
  static propTypes = propTypes
  static defaultProps = defaultProps
  constructor(props) {
    super(props)
    this.state = newState(this.props.fields)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (type, camelCase) => event => {
    const { value } = event.target
    if (type === 'text' || type === 'number' || type === 'selection' || type === 'email') {
      this.setState(
        ({ fields }) => ({
          fields: {
            ...fields,
            [camelCase]: type === 'number' ? toNumber(value) : value
          }
        })
      )
    }
    if (type === 'date' || type === 'mobileNumber') {
      this.setState(
        ({ fields }) => ({
          fields: {
            ...fields,
            [camelCase]: {
              ...fields[camelCase],
              [camelCase]: value
            }
          }
        })
      )
    }
    if (type === 'boolean') {
      this.setState(
        ({ fields }) => ({
          fields: {
            ...fields,
            [camelCase]: !fields[camelCase]
          }
        })
      )
    }
  }
  handleSubmit = () => {
    const { props, state } = this
    const { handleSubmit, fields } = props
    const fieldsErr = errState(fields, state.fields)
    if (checkIfErrors(fieldsErr)) {
      this.setState({ fieldsErr: reduceToErrState(fieldsErr) })
    } else {
      handleSubmit(
        state.fields,
        this.setState(newState(fields))
      )
    }
  }
  render() {
    const { fields, handleClose, className } = this.props
    return (
      <div className={bem({ ignore: true, className }, '')}>
        <Fields
          state={this.state}
          handleChange={this.handleChange}
          fields={fields}
        />
        <Submit
          handleSubmit={this.handleSubmit}
          handleClose={handleClose}
        />
      </div>
    )
  }
}

const SerializeForm = props => (
  <Form
    {...props}
    fields={serializeFields(props.fields)}
  />
)

export default SerializeForm
