const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    points: Number,
    gifts: [{type: Schema.Types.ObjectId, ref: 'Gift'}],
})

const User = mongoose.model("User", userSchema)
module.exports = User