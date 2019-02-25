import { arrayOf, object, array, func, string } from 'prop-types'

export const propTypes = {
  notes: arrayOf(object).isRequired,
  pinnedLoading: array.isRequired,
  deleteLoading: array.isRequired,
  togglePinned: func.isRequired,
  deleteNote: func.isRequired,
  putNote: func.isRequired,
  className: string
}
