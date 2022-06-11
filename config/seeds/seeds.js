require('../database')


const User = require('../../models/User');


const seeds = require('./seeds.json')

let itemArr = seeds.map(item =>({...item}))

User.deleteMany({})
.then(()=>{
    return User.create({name: "Aman Alem", password:"password", email: "alem.aman@gmail.com", listName: "Aman's Big List", items: itemArr})
})
.then(()=>{
    return User.items = itemArr
})
.catch(console.error)
.finally(()=>{
    process.exit()
})
