const mongoose = require('mongoose')

require('./ListItem')

const listSchema = new mongoose.Schema({
    name: String,
    items: [listItemSchema]
})

module.exports = mongoose.model('List', listSchema);