const express = require('express')

const app = express.Router()

// import routes
const notesRoute = require('./notes')
const accountsRoute = require('./accounts')

// routes
app.use('/accounts', accountsRoute)
app.use('/notes', notesRoute)

module.exports = app
