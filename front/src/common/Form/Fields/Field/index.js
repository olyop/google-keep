import React from 'react'

import MobileNumber from './types/MobileNumber'
import BooleanType from './types/BooleanType'
import Selection from './types/Selection'
import TextType from './types/TextType'
import DateType from './types/DateType'

import { propTypes } from './props'

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

Field.propTypes = propTypes

export default Field
