import { COLORS } from '../../../../../globals'

export default {
  submitting: false,
  errors: [],
  fields: {
    title: '',
    note: '',
    pinned: false,
    hidden: false,
    type: 'list',
    color: COLORS[0],
    listItems: [
      { key: 0, checked: false, text: '' }
    ]
  }
}
