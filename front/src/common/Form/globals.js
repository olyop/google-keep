import moment from 'moment'

export const maliciousStrings = ['<', '>', 'script']

export const fieldTypes = ['text', 'number', 'email', 'date', 'mobileNumber', 'selection', 'boolean']

export const defField = {
  required: false,
  helperText: '',
  selections: [],
  def: null,
  placeholder: '',
  maxLength: 256,
  min: -256,
  max: 256,
  validation: []
}

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'Novemeber',
  'December'
]

export const years = [...Array(60)].map((year, index) => moment().year() - index)
