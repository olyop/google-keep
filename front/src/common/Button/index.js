import React from 'react'

import CustomButton from './Button'

import { componentClassNames } from '../../helpers'

const bem = componentClassNames('Button')

const CustomButtonContainer = props => (
  <div className={bem({ ignore: true, className: props.className }, '')}>
    <CustomButton {...props} />
  </div>
)

export default CustomButtonContainer
