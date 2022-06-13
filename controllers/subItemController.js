const User = require('../models/User')



let index = (req, res)=>{
    // Shows all the item's subItems
    User.findById(req.params.userId, (err, user)=>{
        if (err){
            res.status(400).res.json(err)
            return
        }
        user.items.findById(req.params.itemId, (er, item)=>{
            if (er){
                res.status(400).res.json(er)
                return
            }
            res.render('../views/subItems/index.ejs', item)
        })
    })
}

let create = (req, res)=>{
    // creates a new subitem
    console.log('Create subItem function ran')
}


let update = (req, res)=>{}


let destroy = (req, res)=>{}

module.exports = {
    create,
    update,
    index,
    destroy
}