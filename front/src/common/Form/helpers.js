import moment from 'moment'
import shortid from 'shortid'

import { isString, isNumber, isObject, isBoolean, inRange, isNull, startsWith } from 'lodash'
import { maliciousStrings, defField } from './globals'

export const pipe = x => (...fns) => fns.reduce((v, f) => f(v), x)

const getDaysInMonth = (month, year) => moment(`${year}-${month + 1}`, 'YYYY-MM').daysInMonth()

export const daysInMonthArr = (month, year) => [...Array(getDaysInMonth(month, year))].map((v, i) => i + 1)

export const serializeFields = fields => fields.map(
  field => ({
    ...defField,
    ...field,
    key: shortid.generate()
  })
)

const mapAndInitState = fields => fields.reduce(
  (state, field) => {
    const { type, def, camelCase, selections } = field
    if (type === 'text' || type === 'email') {
      state[camelCase] = isNull(def) ? '' : def
    } else if (type === 'number') {
      state[camelCase] = isNull(def) ? 0 : def
    } else if (type === 'date') {
      state[camelCase] = isNull(def) ? { year: 2000, month: 0, day: 1 } : def
    } else if (type === 'selection') {
      state[camelCase] = isNull(def) ? selections[0].camelCase : selections[def].camelCase
    } else if (type === 'mobileNumber') {
      state[camelCase] = isNull(def) ? { countryCode: '', phoneNumber: '' } : def
    } else if (type === 'boolean') {
      state[camelCase] = isNull(def) ? true : def
    }
    return state
  },
  {}
)

const mapStateWithValue = (fields, val) => fields.reduce(
  (state, field) => {
    state[field.camelCase] = val
    return state
  },
  {}
)

export const newState = fields => ({
  fields: mapAndInitState(fields),
  fieldsErr: mapStateWithValue(fields, [])
})

export const addStateValue = state => fields => fields.map(
  field => ({
    ...field,
    val: state[field.camelCase]
  })
)

const checkStrInArr = (arr, str) => arr.reduce(
  (acc, subString) => {
    if (str.includes(subString)) { acc = true }
    return acc
  },
  false
)

const defValidation = fields => fields.map(field => {

  const { val, type, required, maxLength, min, max, selections } = field
  const errors = []

  if (type === 'text') {
    if (isString(val)) {
      if (required && val === '') {
        errors.push('Field is required.')
      } else {
        if (checkStrInArr(maliciousStrings, val)) {
          errors.push('Potentially malicious input.')
        } else {
          if (val.length > maxLength) { errors.push('Input too long.') }
        }
      }
    } else {
      errors.push('Invalid data type.')
    }
  }

  if (type === 'number') {
    if (isNumber(val)) {
      if (inRange(val, min, max) === false) { errors.push('Number is out of range.') }
    }
    else { errors.push('Invalid data type.') }
  }

  if (type === 'date') {
    if (isObject(val)) {
      if (isNumber(val.year) === false || isNumber(val.month) === false || isNumber(val.day) === false) {
        errors.push('Invalid data type.')
      }
    }
    else { errors.push('Invalid data type.') }
  }

  if (type === 'selection') {
    if (isString(val)) {
      if (checkStrInArr(maliciousStrings, val)) {
        errors.push('Potentially malicious input.')
      } else {
        const selectionCodes = selections.map(option => option.camelCase)
        if (checkStrInArr(selectionCodes, val) === false) {
          errors.push('Value not in selection list.')
        }
      }
    }
    else { errors.push('Invalid data type.') }
  }

  if (type === 'mobileNumber') {
    if (isObject(val)) {
      if (isString(val.countryCode) && isString(val.phoneNumber)) {
        if (required && (val.phoneNumber === '' || val.countryCode === '')) {
          errors.push('Field is required.')
          if (startsWith(val.countryCode, '+') === false) {
            errors.push('Country code must start with a \'+\'.')
          }
        }
        if (startsWith(val.countryCode, '+') === false && required === false && val.countryCode !== '') {
          errors.push('Country code must start with a \'+\'.')
        }
      }
      else { errors.push('Invalid data type.') }
    }
    else { errors.push('Invalid data type.') }
  }

  if (type === 'boolean') {
    if (isBoolean(val) === false) { errors.push('Invalid data type.') }
  }

  return ({ ...field, errors })
})

export const errState = (props, state) => (
  pipe(props)(
    addStateValue(state),
    defValidation
  )
)

export const reduceToErrState = fields => fields.reduce(
  (state, field) => {
    state[field.camelCase] = field.errors
    return state
  },
  {}
)

export const checkIfErrors = state => state.reduce(
  (acc, field) => {
    if (field.errors.length !== 0) { acc = true }
    return acc
  },
  false
)
