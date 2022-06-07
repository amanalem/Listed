const mongoose = require('mongoose')

const listSchema = require('./List')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    list: [listSchema],
    googleId: String
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);