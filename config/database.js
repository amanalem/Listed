const mongoose = require('mongoose');
const uri = 'mongodb+srv://amanalem:BxpwMFthAhVuvkm5@cluster0.idqpn.mongodb.net/listed'

mongoose.connect(uri, {
    useNewUrlParser: true,
})

const db = mongoose.connection;

// database connection event

db.on('connected', ()=>{
    console.log(`Mongoose connected to: ${db.host}:${db.port}`);
})