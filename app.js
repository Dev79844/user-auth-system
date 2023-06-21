const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// for logging
app.use(morgan('tiny'))

//for cookies
app.use(cookieParser())

// routes
const user = require('./routes/routes')

app.use("/api/v1",user)

module.exports = app