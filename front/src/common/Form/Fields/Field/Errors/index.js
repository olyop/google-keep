import React from 'react'
import { array } from 'prop-types'

import FormHelperText from '@material-ui/core/FormHelperText'

const Errors = ({ errors }) => {
  if (errors.length === 0) {
    return null
  } else {
    return (
      <div>
        {errors.map((err, idx) => (
          <FormHelperText
            key={idx}
            style={{ color: '#F44336' }}
            children={err}
          />
        ))}
      </div>
    )
  }
}

Errors.propTypes = {
  errors:array.isRequired
}

export default Errors
