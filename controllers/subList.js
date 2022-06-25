// subList Controller

const User = require('../models/User')


const index = (req, res, next) => {
    console.log('SubList index function runs')
    console.log(req.query)

    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

    let sortKey = req.query.sort || 'name';

    User.find(modelQuery)
    .sort(sortKey).exec((err, users) => {
        if (err) return next(err)
        let item = req.user.items.id(req.params.item)
        let subItems = item.subItems
        res.render('subList/index', {
            users, 
            user: req.user,
            name: req.query.name,
            item,
            subItems,
            sortKey
        })
    })
}


const create = (req, res, next) => {
    console.log('SubList create subitem function runs')
    console.log(req.query)

    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

    let sortKey = req.query.sort || 'name';

    // let subItems = req.user.items.id(req.params.item).subItems

    User.find(modelQuery)
    .sort(sortKey).exec((err, users) => {
        if (err) return next(err)
        let user = req.user
        let item = user.items.id(req.params.item)
        item.subItems.push(req.body)
        user.save((er) => {
            if (er) return next(er)
            res.redirect(`/listed/biglist/${item._id}/sublist`)
        })
    })
}

const destroy = (req, res, next) => {
    console.log('Delete BigList item function runs')
    console.log(req.query)

    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

    let sortKey = req.query.sort || 'name';

    User.findOneAndUpdate(modelQuery, {$pull: {items: {_id: req.params.item}}})
    .sort(sortKey).exec((err, users) => {
        if (err) return next(err)
        let user = req.user
        user.save((er) => {
            if (er) return next(er)
            res.redirect(`/listed/biglist`)
        })
        
    })
}



module.exports = {
    index,
    create,
    delete: destroy
}