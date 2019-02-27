import { string, bool } from 'prop-types'

export const propTypes = {
  name: string.isRequired,
  required: bool
}

export const defaultProps = {
  required: false
}
