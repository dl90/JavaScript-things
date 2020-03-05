const express = require('express')
const titleCase = require('./titleCase')

const app = express()

app.get('/:string', (req, res) => {
  const input = req.params.string
  res.send(titleCase(input))
})

module.exports = app