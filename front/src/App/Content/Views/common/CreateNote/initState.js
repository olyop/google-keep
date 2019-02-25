import { COLORS } from '../../../../../globals'

export default {
  submitting: false,
  errors: [],
  fields: {
    title: '',
    note: '',
    pinned: false,
    type: 'note',
    color: COLORS[0]
  }
}
