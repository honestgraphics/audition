const path = require('path')
const cors = require('cors')
const express = require('express')
const { urlencoded, json } = require('body-parser')
const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const mongoose = require('mongoose')
const winston = require('winston')

mongoose.Promise = global.Promise

const WEBPACK_CONFIG = require('../webpack.config')

const app = express()
const NODE_ENV = process.env.NODE_ENV || 'development'
const MONGODB_URI = process.env.MONGODB_URI || 'localhost:27017/audition'

mongoose.connect(MONGODB_URI)
.then(() => winston.log('Connected to database.'))

// Set static directory
const DIST_DIR = path.join(__dirname, '../client/assets')
const HTML_FILE = path.join(DIST_DIR, 'template.html')
const COMPILER = webpack(WEBPACK_CONFIG)

if (NODE_ENV == 'development') {
  // Configure webpack middleware for bundling
  app.use(devMiddleware(COMPILER, {
    publicPath: WEBPACK_CONFIG.output.publicPath
  }))

  app.use(hotMiddleware(COMPILER))
} else {
  // Set public directory
  app.use(express.static(DIST_DIR))
}

// Configure middlewares
app.use(cors())
app.use(urlencoded({ extended: true }))
app.use(json())

app.get('*', (req, res) => res.sendFile(HTML_FILE))

app.listen(process.env.PORT || 3000)

module.exports = app