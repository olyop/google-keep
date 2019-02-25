import React from 'react'
import PropTypes from 'prop-types'

import { toNumber } from 'lodash'
import { serializeFields, errState, checkIfErrors, reduceToErrState, newState } from './helpers'

import Fields from './Fields'
import Submit from './Submit'

import './index.css'

class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = newState(this.props.fields)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (type, camelCase) => event => {
    const { value, name } = event.target
    if (type === 'text' || type === 'number' || type === 'selection' || type === 'email') {
      this.setState(prevState => ({
        fields: {
          ...prevState.fields,
          [camelCase]: type === 'number' ? toNumber(value) : value
        }
      }))
    }
    if (type === 'date' || type === 'mobileNumber') {
      this.setState(prevState => ({
        fields: {
          ...prevState.fields,
          [camelCase]: {
            ...prevState.fields[camelCase],
            [name]: value
          }
        }
      }))
    }
    if (type === 'boolean') {
      this.setState(prevState => ({
        fields: {
          ...prevState.fields,
          [camelCase]: !prevState.fields[camelCase]
        }
      }))
    }
  }

  handleSubmit = () => {
    const fieldsErr = errState(this.props.fields, this.state.fields)
    if (checkIfErrors(fieldsErr)) {
      this.setState({ fieldsErr: reduceToErrState(fieldsErr) })
    } else {
      this.props.handleSubmit(
        this.state.fields,
        () => {
          this.setState(newState(this.props.fields))
        }
      )
    }
  }

  render() {
    const { fields, handleClose, className } = this.props
    return (
      <div className={className === '' ? 'Form' : className + ' Form'}>
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

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func,
  className: PropTypes.string
}

Form.defaultProps = {
  className: ''
}

export default SerializeForm
