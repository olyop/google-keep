const mongoose = require('mongoose')
const { Schema } = mongoose

const listItemSchema = new Schema({
  checked: { type: Boolean, required: true },
  text: { type: String, required: true }
})

exports.notesSchema = new Schema({
  dateCreated: {
    year: { type: Number, required: true },
    month: { type: Number, required: true },
    day: { type: Number, required: true }
  },
  type: { type: String, required: true, enum: ['note', 'list'] },
  note: String,
  title: { type: String, default: '' },
  color: { type: String, default: '#333333' },
  listItems: [listItemSchema],
  pinned: { type: Boolean, required: true },
  hidden: { type: Boolean, required: true }
})

exports.accountsSchema = new Schema({
  dateCreated: {
    year: Number,
    month: Number,
    day: Number
  },
  firstName: { type: String, required: true },
  familyName: { type: String, required: true },
  gender: { type: String, default: 'male' },
  dob: {
    year: Number,
    month: Number,
    day: Number
  },
  email: { type: String, required: true }
})
