const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/listed', {
    useNewUrlParser: true,
})

const db = mongoose.connection;

// database connection event

db.on('connected', ()=>{
    console.log(`Mongoose connected to: ${db.host}:${db.port}`);
})