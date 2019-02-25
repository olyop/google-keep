import React from 'react'

import CustomButton from './Button'

import { classNames } from '../../helpers'

const CustomButtonContainer = props => (
  <div {...classNames('Button', props.className)}>
    <CustomButton {...props} />
  </div>
)

export default CustomButtonContainer
