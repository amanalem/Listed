const mongoose = require('mongoose')



const prioritySchema = new mongoose.Schema({
    level: String
},
{
    timestamps: true
})


module.exports = prioritySchema;