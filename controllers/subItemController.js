const User = require('../models/User')




// let index = (req, res)=>{
//     // Shows all the item's subItems
//     User.findById(req.params.userId, (err, user)=>{
//         if (err){
//             res.status(400).res.json(err)
//             return
//         }
//         user.items.find({id: req.params.itemId}, (e, item)=>{
//             res.render('../views/subItems/index.ejs', {item})
//         })
//         // user.items.find({}, (er, i)=>{
//         //     i.findById(req.params.itemId, (er, item)=>{
//         //         if (er){
//         //             res.status(400).res.json(er)
//         //             return
//         //         }
//         //         res.render('../views/subItems/index.ejs', {item})
//         //     })
//         // })
//     })
// }

let index = (req, res)=>{
    console.log('subItem indexing function');
    User.findById(req.params.userId, (err, user)=>{
        if(err){
            res.status(400).res.json(err)
            return
        }
        user.find({items: {_id: req.params.itemId}}, (er, item)=>{
            if(er){
                res.status(400).res.json(er)
                return
            }
            item.find({subItems: {_id: req.params.subItemId}}, (e, subItem)=>{
                if(e){
                    res.status(400).res.json(e)
                    return
                }
                res.render('subItems/index.ejs', {user, item, subItem})
            })
            
            // 
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
            .then(()=>{
                item.save(()=>{
                    res.redirect(`/listed/${req.params.userId}/items`)
                })
            })
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
                    res.redirect(`/listed/${req.params.userId}/${req.params.itemId}/subitems`)
                })
            })
        })
    })
}


// let destroy = (req, res)=>{
//     // deletes subItem
//     console.log('Destroy subItem Function ran')
//     User.findById(req.params.userId, (err, user)=>{
//         console.log('User found');
//         if(err){
//             res.status(400).res.json(err)
//             return
//         }
//         user.items.id(req.params.itemId, (er, item)=>{
//             if(er){
//                 res.status(400).res.json(er)
//                 return
//             }
//             item.subItems.id(req.params.subItemId).remove()
//             item.save(()=>{
//                     res.redirect(`/listed/${req.params.userId}/${req.params.itemId}/subitems`)
//             })
//         })
//             // should this be item.save()?
//     })
// }

// let destroy = async(req, res)=>{
//     User.findById(req.params.userId, (err, user)=>{
//         console.log("we're in the subitem deletes")
//         let item = user.items.id(req.params.itemId)
//         item.findByIdAndUpdate
//     })
// }

// let destroy = (req,res)=>{
//     User.findById(req.params.userId, (err, user)=>{
//         if(err){
//             res.status(400).res.json(err)
//             return
//         }
//         let item = user.items.id(req.params.itemId)
//         .then(()=>{
//             item.subItems.filter(subItem => subItem._id !== req.params.subItemId)
//         })
//         .then(()=>{
//             user.save((e)=>{
//                 if(e){
//                     res.status(400).res.json(e)
//                     return
//                 }
//                 res.redirect(`/listed/${req.params.userId}/${req.params.itemId}/subitems`)
//             })
//         })
//     })
// }

// let destroy = (req, res)=>{
//     User.findByIdAndUpdate(req.params.userId, {$pull: {items.$.subItems: {_id: req.params.itemId}}}, {new: true}, (err, user)=>{
//         console.log(err);
//         console.log("We're in the deletes");
//         res.redirect(`/listed/${req.params.userId}/items`)
//     })
// }

let destroy = (req,res)=>{
    User.findById(req.params.userId, (err, user)=>{
        user.items.update({}, {$pull: {subItems: {_id: req.params.subItemId}}}, {new: true}, ()=>{
            res.redirect(`/listed/${req.params.userId}/${req.params.itemId}/subitems`)
        })
    })
}

module.exports = {
    create,
    update,
    index,
    destroy
}