import { COLORS } from '../../../../../globals'

export default {
  submitting: false,
  errors: [],
  type: 'note',
  fields: {
    title: '',
    note: '',
    pinned: false,
    hidden: false,
    type: 'note',
    color: COLORS[0],
    listItems: []
  }
}
