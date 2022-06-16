const User = require('../models/User')


let index = (req, res)=>{
    // Shows all the items in your big list
    User.findById(req.params.userId, (err, user)=>{
        if (err){
            res.status(400).res.json(err)
            return
        }
        res.render('../views/items/index.ejs', {user})
    })
}


let show = (req, res)=>{
    // Shows form to add new item
    User.findById(req.params.userId, (err, user)=>{
        if(err){
            res.status(400).res.json(err)
            return
        }
        res.render('../views/')
    })

}

let create = (req, res)=>{
    User.findById(req.params.userId, (err, user)=>{
        if(err){
            res.status(400).res.json(err)
        }
        res.render('../views/bigList/index.ejs')
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
    show,
    index,
    destroy
}