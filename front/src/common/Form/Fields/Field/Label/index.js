import React from 'react'

import InputLabel from '@material-ui/core/InputLabel'

import { propTypes, defaultProps } from './props'

const labelRequiredStr = (label, required) => label + (required ? ' *' : '')

const Label = ({ name, required }) => (
  <InputLabel
    shirnk="true"
    children={labelRequiredStr(name, required)}
  />
)

Label.propTypes = propTypes
Label.defaultProps = defaultProps

export default Label
