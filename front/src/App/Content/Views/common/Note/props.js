import { array, func, string, bool, arrayOf, object } from 'prop-types'

export const propTypes = {
  pinnedLoading: array.isRequired,
  deleteLoading: array.isRequired,
  togglePinned: func.isRequired,
  deleteNote: func.isRequired,
  _id: string.isRequired,
  title: string.isRequired,
  pinned: bool.isRequired,
  color: string.isRequired,
  note: string,
  list: arrayOf(object)
}
