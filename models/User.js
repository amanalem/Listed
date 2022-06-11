const mongoose = require('mongoose')


const subItemSchema = new mongoose.Schema({
    name: String
},
{
    timestamps: true
})



const listItemSchema = new mongoose.Schema({
    name: String,
    // item: [subItemSchema]
},
{
    timestamps: true
})



const listSchema = new mongoose.Schema({
    name: String,
    items: [listItemSchema]
})


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