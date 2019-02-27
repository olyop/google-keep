import React from 'react'
import { object } from 'prop-types'

import Input from '@material-ui/core/Input'
import HelperText from '../../HelperText'
import Errors from '../../Errors'
import Label from '../../Label'

const MobileNumber = ({val,handleChange,name,camelCase,type,placeholder,required,helperText,errors}) => (
  <div className="Field">
    <Label
      name={name}
      required={required}
    />
    <div className="Field__row">
      <Input
        type="tel"
        autoComplete="tel"
        name="countryCode"
        value={val.countryCode}
        onChange={handleChange(type, camelCase)}
        style={{ width: 30, marginRight: 5 }}
        inputProps={{ maxLength: 3 }}
      />
      <Input
        type="tel"
        autoComplete="tel"
        name="phoneNumber"
        value={val.phoneNumber}
        onChange={handleChange(type, camelCase)}
        style={{ width: 90 }}
        inputProps={{ maxLength: 10 }}
        placeholder={placeholder}
      />
    </div>
    <HelperText
      text={helperText}
    />
    <Errors
      errors={errors}
    />
  </div>
)

MobileNumber.propTypes = {
  val: object.isRequired
}

export default MobileNumber
