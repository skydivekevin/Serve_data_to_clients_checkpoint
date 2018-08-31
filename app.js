const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.disable('x-powered-by')
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(bodyParser.json())
const Papa = require('papaparse')
const csvPath = path.join(__dirname, 'db', 'dataset.csv')
const options = { header: true, skipEmptyLines: true, dynamicTyping: true }

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
});

app.get('/', (req, res) => {
  const csv = fs.readFileSync(csvPath, 'utf-8')
  let { data } = Papa.parse(csv, options)
  res.json({ data })
})

app.get('/:id', (req, res) => {
  const { id } = req.params
  const csv = fs.readFileSync(csvPath, 'utf-8')
  let { data } = Papa.parse(csv, options)
  data = data.find(dataset => dataset.id === Number(id))
  if (data) {
    res.json({ data })
  } else {
    res.status(404).json({ error: { message: 'No record found' } })
  }
})

const listener = () => `Listening on port ${port}!`
app.listen(port, listener)

module.exports = app
