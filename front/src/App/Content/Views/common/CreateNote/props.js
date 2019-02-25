import { func, object, string } from 'prop-types'

export const propTypes = {
  handleSubmit: func.isRequired,
  classes: object.isRequired,
  className: string
}
