const express = require('express')
const notes = require('./notes')
const app = express()

app.get('/hello', (req, res) => {
  res.send('hello')
})

app.get('/:number', (req, res) => {
  const number = req.params.number
  const converted = notes(number)
  res.send(converted)
})

module.export = app
