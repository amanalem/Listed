const mongoose = require('mongoose')

const subItemSchema = require('./SubItem')

const itemSchema = new mongoose.Schema({
    entry: String,
    subItems: [subItemSchema]
},
{
    timestamps: true
})



module.exports = itemSchema;