const User = require('../models/User')


let index = (req, res)=>{
    // Shows all the items subItems
    User.findById(req.params.userId, (err, user)=>{
        if (err){
            res.status(400).res.json(err)
            return
        }
        res.render('../views/items/index.ejs', {user})
    })
}

let create = (req, res)=>{
    User.findById(req.params.userId, (err, user)=>{
        if(err){
            res.status(400).res.json(err)
        }
        res.render('../views/bigList.ejs')
    })
}

let update = (req, res)=>{
    User.findById(req.params.userId, (err, user)=>{
        if(err){
            res.status(400).res.json(err)
        }
        user.items.findByIdAndUpdate(req.params.itemId, req.body, {new: true}, (er, item)=>{
            if(er){
                res.status(400).res.json(er)
                return
            }
            item.save(()=>{
                res.redirect(`/listed/${req.params.userId}/items/${req.params.itemId}`)
            })
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