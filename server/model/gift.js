const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GiftSchema = new Schema({
    name: String,
    price: Number,
    picture: String
})

const Gift = mongoose.model("Gift", GiftSchema)
module.exports = Gift