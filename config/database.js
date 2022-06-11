const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
})

const db = mongoose.connection;

// database connection event

db.on('connected', ()=>{
    console.log(`Mongoose connected to: ${db.host}:${db.port}`);
})