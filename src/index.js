'use strict'

const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')

const { port } = require('./config/config')

app.use(cors())
app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/vehicle', require('./endpoints/vehicle/router'))
app.use('/schedule', require('./endpoints/schedule/router'))
app.use('/order', require('./endpoints/order/router'))

app.listen(port, () => console.log(`Server start in the http://localhost:${port}`))
