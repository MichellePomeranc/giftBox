const mongoose = require('mongoose')
const Schema = mongoose.Schema

const providerSchema = new Schema({
    name: String,
    address: String,
    map: String,
    picture: String,
    rating: Number,
    lat:Number,
    lng:Number
})

const Provider = mongoose.model("Provider", providerSchema)
module.exports = Provider
