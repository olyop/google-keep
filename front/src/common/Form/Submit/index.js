import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'

const Submit = ({ handleSubmit, handleClose }) => (
  <div className="Form__submit">
    <Button
      onClick={handleSubmit}
      variant="contained"
      children="Submit"
    />
    <Button
      onClick={handleClose}
      style={{ marginLeft: 10 }}
      children="Cancel"
    />
  </div>
)

Submit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func
}

export default Submit
