const User = require('../models/User')

let index = (req, res)=>{
    console.log("Home Route");
    // Shows all the items in your big list
    User.findById(req.params.userId, (err, user)=>{
        if (err){
            res.status(400).res.json(err)
            return
        }
        console.log("about to render");
        res.render('items/index.ejs', {user})
    })
}

// let showSubItems = (req, res)=>{
//     console.log('subItem indexing function');
//     User.findById(req.params.userId, (err, user)=>{
//         if(err){
//             res.status(400).res.json(err)
//             return
//         }
//         user.items.findOne({_id: req.params.itemId}, (er, item)=>{
//             console.log('found item');
//             if(er){
//                 res.status(400).res.json(er)
//                 return
//             }
//             res.render('subItems/index.ejs', {user, item})
//         })
//     })
// }

let showSubItems = (req, res)=>{
    console.log(('subItem indexing function'));
    User.findById(req.params.userId, (err, user)=>{
        if(err){
            res.status(400).res.json(err)
            return
        }
        console.log('user found');
        let item = user.items.id(req.params.itemId);
        res.render('subItems/index.ejs', {user, item})
        
    });
}



let show = (req, res)=>{
    // Shows form to add new item
    User.findById(req.params.userId, (err, user)=>{
        if(err){
            res.status(400).res.json(err)
            return
        }
        res.render('items/new.ejs', {user})
    })

}

let create = (req, res)=>{
    User.findById(req.params.userId, (err, user)=>{
        if(err){
            res.status(400).res.json(err)
        }

        req.body.Priority = req.body.ogPriority;
        user.items.push(req.body)
        // .then(()=>{
        //     let l = ((user.items.length) - 1);
        //     return user.items[l].priority = user.items[l].ogPriority;
        // })
        console.log(req.body);
        user.save(()=>{
            res.redirect(`/listed/${user._id}/items`)
        })
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

// let destroy = (req, res)=>{
//     User.findById(req.params.userId, (err, user)=>{
//         if(err){
//             res.status(400).res.json(err)
//             return
//         }
//         user.items.findOneAndDelete(req.params.itemId)
//         .then(()=>{
//             user.save((er)=>{
//                 res.redirect(`/listed/${req.params.userId}/items`)
//             })
//         })
        
//     })
// }

let destroy = (req, res)=>{
    User.findByIdAndUpdate(req.params.userId, {$pull: {items: {_id: req.params.itemId}}}, {new: true}, (err, user)=>{
        console.log(err);
        console.log("We're in the deletes");
        res.redirect(`/listed/${req.params.userId}/items`)
    })
}

// let destroy = (req, res)=>{
//     User.findById(req.params.userId, (err, user)=>{
//         if(err){
//             res.status(400).res.json(err)
//             return
//         }
//         user.items.findOneAndDelete(req.params.)
        
//     })
// }

module.exports = {
    create,
    update,
    show,
    showSubItems,
    index,
    destroy
}