const User = require('../models/User')

let create = (req, res)=>{}

let update = (req, res)=>{}

// let show = (req, res)=>{

// }

let index = (req, res)=>{
    // Shows all the items subItems
    User.findById(req.params.userId, (err, user)=>{
        if (err){
            res.status(400).res.json(err)
            return
        }
        user.items.find({}, (er, allItems)=>{
            if (er){
                res.status(400).res.json(er)
                return
            }
            res.render('../views/items/index.ejs', allItems)
        })
    })
}

let destroy = (req, res)=>{}

module.exports = {
    create,
    update,
    // show,
    index,
    destroy
}