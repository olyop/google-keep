const mongoose = require('mongoose')
const { model } = mongoose

const { notesSchema, accountsSchema } = require('./schemas')

const Account = model('Account', accountsSchema, 'accounts')
const Note = model('Note', notesSchema, 'notes')

module.exports = { Note, Account }
