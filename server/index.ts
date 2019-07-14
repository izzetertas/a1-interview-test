import express = require('express')
import { getCars, getCar } from './controllers/cars'
import { getColors } from './controllers/colors'
import { getManufacturers } from './controllers/manufacturers'

const app: express.Application = express()

app.get('/api/cars/:stockNumber', getCar)
app.get('/api/cars', getCars)
app.get('/api/colors', getColors)
app.get('/api/manufacturers', getManufacturers)

const port = 3001
app.listen(port, function () {
  console.log(`Auto-1 app listening on port ${port}!`)
})