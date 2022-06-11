const mongoose = require('mongoose')

const subItemSchema = new mongoose.Schema({
    entry: String
})

const SubItem = mongoose.model("SubItems", subItemSchema)

module.exports = SubItem;