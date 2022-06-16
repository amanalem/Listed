const mongoose = require('mongoose')


const itemSchema = require('./Item')

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    bigListName: String,
    items: [itemSchema],
    googleId: String
},
{
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User;