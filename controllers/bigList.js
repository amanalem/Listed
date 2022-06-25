const User = require('../models/User')

// Gets bigList
const index = (req, res, next) => {
    console.log('BigList index function runs')
    console.log(req.query)

    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

    let sortKey = req.query.sort || 'name';

    User.find(modelQuery)
    .sort(sortKey).exec((err, users) => {
        if (err) return next(err)
        res.render('bigList/index', {
            users, 
            user: req.user,
            name: req.query.name,
            sortKey
        })
    })
    
}

// creates new biglist item
const create = (req, res, next) => {
    console.log('Create BigList item function runs')
    console.log(req.query)

    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

    let sortKey = req.query.sort || 'name';

    User.find(modelQuery)
    .sort(sortKey).exec((err, users) => {
        if (err) return next(err)
        let user = req.user
        user.items.push(req.body)
        user.save(er => {
            if (er) return next(er)
            res.render('bigList/index', {
                users, 
                user,
                name: req.query.name,
                sortKey
            })
        })
    })
    
}

// Gets form to add to bigList item
const newItem = (req, res, next) => {
    console.log('Get for for new BigList item function runs')
    console.log(req.query)

    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

    let sortKey = req.query.sort || 'name';

    User.find(modelQuery)
    .sort(sortKey).exec((err, users) => {
        if (err) return next(err)
        res.render('bigList/new', {
            users, 
            user: req.user,
            name: req.query.name,
            sortKey
        })
    })
}

// let show = (req, res)=>{
//     // Shows form to add new item
//     User.findById(req.params.userId, (err, user)=>{
//         if(err){
//             res.status(400).res.json(err)
//             return
//         }
//         res.render('items/new.ejs', {user})
//     })

// }

const destroy = (req, res, next) => {
    console.log('Delete BigList item function runs')
    console.log(req.query)

    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

    let sortKey = req.query.sort || 'name';

    User.find(modelQuery)
    .sort(sortKey).exec((err, users) => {
        if (err) return next(err)
        res.render('bigList/new', {
            users, 
            user: req.user,
            name: req.query.name,
            sortKey
        })
    })
}

module.exports = {
    index,
    create,
    new: newItem,
    delete: destroy

}