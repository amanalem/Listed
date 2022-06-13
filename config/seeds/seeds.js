require('../database')


const User = require('../../models/User');


const seeds = require('./seeds.json')
const subSeeds = require('./subSeeds.json')


User.deleteMany({})
.then(()=>{
    return User.create({name: "Aman Alem", password:"password", email: "alem.aman@gmail.com", listName: "Aman's Big List"})
})
.then((user)=>{
    seeds.forEach((seed, i)=>{
        user.items.push({entry: seed.entry})
    })
    return user.save()
})
// .then((user)=>{
//     user.items.forEach((si)=>{
//         si.subItems.push({entry: "entry1"})
//     })
//     return user.save()
// })
.then((user)=>{
    for (i = 0; i < 6; i++) {
        user.items.forEach((item)=>{
            item.subItems.push({entry: `This is subItem ${i}. These items will be listed.`})
        })
    }
    return user.save()
})
.then(console.log)
.catch(console.error)
.finally(()=>{
    process.exit()
})

