import { any, array, func, object, string, oneOf, bool, number, arrayOf } from 'prop-types'

import { fieldTypes } from '../../globals'

export const propTypes = {
  val: any.isRequired,
  errors: array.isRequired,
  handleChange: func.isRequired,
  name: string.isRequired,
  camelCase: string.isRequired,
  type: oneOf(fieldTypes).isRequired,
  required: bool,
  helperText: string,
  selections: arrayOf(object),
  def: any,
  placeholder: string,
  maxLength: number,
  validation: arrayOf(func),
  booleanText: string,
  min: number,
  max: number
}
