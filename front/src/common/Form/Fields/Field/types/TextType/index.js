import React from 'react'
import { oneOfType, string, number } from 'prop-types'

import Input from '@material-ui/core/Input'
import HelperText from '../../HelperText'
import Errors from '../../Errors'
import Label from '../../Label'

const TextType = ({val,errors,handleChange,name,camelCase,type,placeholder,helperText,required,maxLength}) => (
  <div className="Field">
    <Label
      name={name}
      required={required}
    />
    <Input
      type={type}
      value={val}
      onChange={handleChange(type, camelCase)}
      placeholder={placeholder}
      inputProps={{ maxLength }}
      fullWidth
    />
    <HelperText
      text={helperText}
    />
    <Errors
      errors={errors}
    />
  </div>
)

TextType.propTypes = {
  val: oneOfType([ string, number]).isRequired
}

export default TextType
