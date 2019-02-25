import { func, bool, string } from 'prop-types'

export const propTypes = {
  toggleEdit: func.isRequired,
  handleInputChange: func.isRequired,
  edit: bool.isRequired,
  title: string.isRequired,
  note: string.isRequired
}
