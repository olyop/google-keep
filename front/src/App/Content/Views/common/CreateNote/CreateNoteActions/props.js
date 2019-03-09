import { func, bool, string, object } from 'prop-types'

export const propTypes = {
  handleSubmit: func.isRequired,
  initState: func.isRequired,
  toggleList: func.isRequired,
  handleChange: func.isRequired,
  canSubmit: bool.isRequired,
  submitting: bool.isRequired,
  color: string.isRequired,
  classes: object.isRequired,
  pinned: bool.isRequired,
  type: string.isRequired
}
