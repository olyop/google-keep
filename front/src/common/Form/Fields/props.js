import { object, func, array } from 'prop-types'

export const propTypes = {
  state: object.isRequired,
  handleChange: func.isRequired,
  fields: array.isRequired
}
