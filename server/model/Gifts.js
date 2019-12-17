const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GiftSchema = new Schema({
    name: String,
    provider: [{type: Schema.Types.ObjectId, ref: 'Provider'}],
    price: Number,
})

const Gift = mongoose.model("Gift", GiftSchema)
module.exports = Gift