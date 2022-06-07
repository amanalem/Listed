const mongoose = require('mongoose')

const subItemSchema = require('./SubItem')

const listItemSchema = new mongoose.Schema({
    name: String,
    item: [subItemSchema]
},
{
    timestamps: true
})

module.exports = mongoose.model('List Item', listItemSchema)