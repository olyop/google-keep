import { arrayOf, object, func, string } from 'prop-types'

export const propTypes = {
  fields: arrayOf(object).isRequired,
  handleSubmit: func.isRequired,
  handleClose: func,
  className: string
}

export const defaultProps = {
  className: undefined
}
