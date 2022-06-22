const mongoose = require('mongoose')
// const pre = require('pre')

const subItemSchema = require('./SubItem')
// const prioritySchema = require('./Priority')


// const itemSchema = new mongoose.Schema({
//     entry: String,
//     priority: [prioritySchema],
//     subItems: [subItemSchema]
// })


const itemSchema = new mongoose.Schema({
    entry: String,
    ogPriority: String,
    priority: String,
    subItems: [subItemSchema]
},
{
    timestamps: true
})



module.exports = itemSchema;