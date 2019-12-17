const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    points: Number
})

const User = mongoose.model("User", citySchema)
module.exports = User