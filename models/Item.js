const mongoose = require('mongoose')

const subItemSchema = require('./SubItem')
const prioritySchema = require('./Priority')

const itemSchema = new mongoose.Schema({
    entry: String,
    priority: [prioritySchema],
    subItems: [subItemSchema]
})



module.exports = itemSchema;