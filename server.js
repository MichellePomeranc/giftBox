const express = require('express')
const app = express()
const api = require('./Server/routes/api')
const gifts = require("./Server/model/gift.js")
const providers = require("./Server/model/providers.js")
const users = require("./Server/model/users.js")

const path = require('path')

const mongoose = require('mongoose')
const bodyParser = require("body-parser")

app.use(express.static(path.join(__dirname, '/dist')))
app.use(express.static(path.join(__dirname, '/node_modules')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', api)

mongoose.connect(process.env.MONGODB_URI|| 'mongodb://localhost/giftBox', {
    useNewUrlParser: true
})

const port = process.env.PORT || 3000
app.listen(port, function () {
    console.log(`running server on port ${port}`)
})