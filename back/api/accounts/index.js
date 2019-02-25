const express = require('express')

const mongoose = require('mongoose')
const moment = require('moment')

const { Account } = require('../../db/models')
const { newDateObj } = require('../../helpers')

const app = express.Router()

app.get('/', (req, res, nxt) => {
  Account.find(
    {},
    (err, accounts) => {
      if (err) {
        console.log(err)
        nxt(err)
      } else {
        res.status(200).json(accounts)
      }
    }
  )
})

app.post('/', (req, res, nxt) => {
  Account.create(
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
  // const _id = req
  // Account.findOneAndUpdate(
  //   { _id }
  // )
})

app.delete('/', (req, res, nxt) => {
  const _id = req.body._id
  Account.deleteOne(
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
