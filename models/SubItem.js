const mongoose = require('mongoose')

const subItemSchema = new mongoose.Schema({
    entry: String
})



module.exports = subItemSchema;