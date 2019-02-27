import React from 'react'
import { string } from 'prop-types'

import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import HelperText from '../../HelperText'
import Label from '../../Label'

import shortid from 'shortid'

const Selection = ({val,handleChange,name,camelCase,type,helperText,required,selections}) => (
  <div className="Field">
    <Label
      name={name}
      required={required}
    />
    <Select
      value={val}
      onChange={handleChange(type, camelCase)}
      input={<Input />}
    >
      {selections.map(selection => (
        <MenuItem
          key={shortid.generate()}
          value={selection.camelCase}
          children={selection.name}
        />
      ))}
    </Select>
    <HelperText
      text={helperText}
    />
  </div>
)

Selection.propTypes = {
  val: string.isRequired
}

export default Selection
