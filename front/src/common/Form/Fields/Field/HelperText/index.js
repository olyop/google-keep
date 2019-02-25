import React from 'react'
import PropTypes from 'prop-types'

import FormHelperText from '@material-ui/core/FormHelperText'

const HelperText = ({ text }) => {
  if (text === '') {
    return null
  } else {
    return <FormHelperText>{text}</FormHelperText>
  }
}

HelperText.propTypes = {
  text: PropTypes.string.isRequired
}

export default HelperText
