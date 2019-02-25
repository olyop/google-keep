import React from 'react'
import PropTypes from 'prop-types'

import Switch from '@material-ui/core/Switch'
import HelperText from '../../HelperText'
import Label from '../../Label'

const BooleanType = ({val,handleChange,name,camelCase,type,helperText,booleanText}) => (
  <div className="Field">
    <Label
      name={name}
    />
    <div className="Field__row">
      <p className="Field__row-p">{booleanText}</p>
      <Switch
        onChange={handleChange(type, camelCase)}
        checked={val}
      />
    </div>
    <HelperText
      text={helperText}
    />
  </div>
)

BooleanType.propTypes = {
  val: PropTypes.bool.isRequired,
  booleanText: PropTypes.string.isRequired
}

export default BooleanType
