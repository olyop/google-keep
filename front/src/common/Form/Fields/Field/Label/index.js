import React from 'react'
import PropTypes from 'prop-types'

import InputLabel from '@material-ui/core/InputLabel'

const labelRequiredStr = (label, required) => label + (required ? ' *' : '')

const Label = ({ name, required }) => (
  <InputLabel
    shirnk="true"
    children={labelRequiredStr(name, required)}
  />
)

Label.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool
}

Label.defaultProps = {
  required: false
}

export default Label
