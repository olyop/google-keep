const express = require('express')

const mongoose = require('mongoose')
const moment = require('moment')

const { Note } = require('../../db/models')
const { newDateObj } = require('../../helpers')

const app = express.Router()

app.get('/', (req, res, nxt) => {
  Note.find(
    {},
    (err, notes) => {
      if (err) {
        console.log(err)
        nxt(err)
      } else {
        res.status(200).json(notes)
      }
    }
  )
})

app.post('/', (req, res, nxt) => {
  Note.create(
    { ...req.body, dateCreated: newDateObj(moment()) },
    (err, doc) => {
      if (err) {
        console.log(err)
        nxt(err)
      } else {
        res.status(201).json(doc)
      }
    }
  )
})

app.put('/', (req, res, nxt) => {
  Note.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (err) {
        console.log(err)
        nxt(err)
      } else {
        res.status(200).json(doc)
      }
    }
  )
})

app.delete('/', (req, res, nxt) => {
  const _id = req.body._id
  Note.deleteOne(
    { _id },
    err => {
      if (err) {
        console.log(err)
        nxt(err)
      } else {
        res.status(200).json({ _id })
      }
    }
  )
})

module.exports = app
