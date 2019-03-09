import { string, func } from 'prop-types'

export const propTypes = {
  handleChange: func.isRequired,
  title: string.isRequired,
  note: string.isRequired
}
