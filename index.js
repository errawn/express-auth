// Starting Point
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const router = require('./router')

const app = express()

// App Setup
app.use(morgan('combined')) // used for logging
app.use(bodyParser.json({ type: '*/*' })) // parse incoming request. parse as json(as defined)
router(app)

// Server Setup
const port = process.env.PORT || 3090
const server = http.createServer(app)

server.listen(port)
console.log(`Server running at ${port}`)



