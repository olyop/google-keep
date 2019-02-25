import { any, array, func } from 'prop-types'

export const propTypes = {
  notes: any,
  pinnedLoading: array.isRequired,
  deleteLoading: array.isRequired,
  addNote: func.isRequired,
  togglePinned: func.isRequired,
  putNote: func.isRequired,
  deleteNote: func.isRequired
}
