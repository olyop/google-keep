import React from 'react'
import PropTypes from 'prop-types'

import { fieldTypes } from '../../globals'

import MobileNumber from './types/MobileNumber'
import BooleanType from './types/BooleanType'
import Selection from './types/Selection'
import TextType from './types/TextType'
import DateType from './types/DateType'

import './index.css'

const Field = props => {
  const { type } = props
  if (type === 'text' || type === 'number' || type === 'email') {
    return <TextType {...props} />
  } else if (type === 'date') {
    return <DateType {...props} />
  } else if (type === 'mobileNumber') {
    return <MobileNumber {...props} />
  } else if (type === 'selection') {
    return <Selection {...props} />
  } else if (type === 'boolean') {
    return <BooleanType {...props} />
  } else {
    return null
  }
}

Field.propTypes = {
  val: PropTypes.any.isRequired,
  errors: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  camelCase: PropTypes.string.isRequired,
  type: PropTypes.oneOf(fieldTypes).isRequired,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  selections: PropTypes.arrayOf(PropTypes.object),
  def: PropTypes.any,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  validation: PropTypes.arrayOf(PropTypes.func),
  booleanText: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number
}

export default Field
