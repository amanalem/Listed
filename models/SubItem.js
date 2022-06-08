const mongoose = require('mongoose')

const subItemSchema = new mongoose.Schema({
    name: String
},
{
    timestamps: true
})

module.exports = mongoose.model('Sub Item', subItemSchema)