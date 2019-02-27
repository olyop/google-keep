import React from 'react'
import { string } from 'prop-types'

import FormHelperText from '@material-ui/core/FormHelperText'

const HelperText = ({ text }) => {
  if (text === '') {
    return null
  } else {
    return <FormHelperText>{text}</FormHelperText>
  }
}

HelperText.propTypes = {
  text: string.isRequired
}

export default HelperText
