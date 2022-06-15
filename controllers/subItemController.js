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
            res.render('../views/subItems/index.ejs', {item})
        })
    })
}

let create = (req, res)=>{
    // creates a new subitem
    console.log('Create subItem function ran')
    User.findById(req.params.userId, (err, user)=>{
        if (err){
            res.status(400).res.json(err)
            return
        }
        user.items.findById(req.params.itemId, (er, item)=>{
            if(er){
                res.status(400).res.json(er)
                return
            }
            item.subItems.push(req.body)
            user.save()
        })
    })
}
let destroy = (req, res)=>{
    // deletes subItem
    console.log('Destroy subItem Function ran')
    User.findById(req.params.userId, (err, user)=>{
        if(err){
            res.status(400).res.json(err)
            return
        }
        user.items.findById(req.params.itemId, (er, item)=>{
            if(er){
                res.status(400).res.json(er)
                return
            }
            item.subItems.id(req.params.subItemId).remove()
            user.save(()=>{
                res.redirect(`/listed/${req.params.userId}/items/${req.params.itemId}/subitems`)
            })
            // should this be item.save()?
        })
    })
}

let update = (req, res)=>{
    // Updates subItem
    console.log('Update subItem Function ran')
    User.findById(req.params.userId, (err, user)=>{
        if(err){
            res.status(400).res.json(err)
            return
        }
        user.items.findById(req.params.itemId, (er, item)=>{
            if(er){
                res.status(400).res.json(er)
                return
            }
            item.subItems.findByIdAndUpdate(req.params.subItemId, req.body, {new: true}, (e, subItem)=>{
                if(e){
                    res.status(400).res.json(e)
                    return
                }
                subItem.save(()=>{
                    res.redirect(`/listed/${req.params.userId}/items/${req.params.itemId}/subitems`)
                })
            })
        })
    })
}




module.exports = {
    create,
    update,
    index,
    destroy
}