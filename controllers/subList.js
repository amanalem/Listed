// subList Controller

const User = require('../models/User')


const index = (req, res, next) => {
    console.log('SubList index function runs')

    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

    let sortKey = req.query.sort || 'name';

    User.find(modelQuery)
    .sort(sortKey).exec((err, users) => {
        if (err) return next(err)
        let item = req.user.items.id(req.params.item)
        let subItems = item.subItems
        let subItem = subItems.id(req.params.subItem)
        res.render('subList/index', {
            users, 
            user: req.user,
            name: req.query.name,
            item,
            subItems,
            subItem,
            sortKey
        })
    })
}


const create = (req, res, next) => {
    console.log('SubList create subitem function runs')

    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

    let sortKey = req.query.sort || 'name';

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


const update = (req, res, next) => {
    console.log('Delete BigList item function runs')


    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

    let sortKey = req.query.sort || 'name';

    console.log(modelQuery);

    User.findOneAndUpdate(modelQuery)
    .sort(sortKey).exec((err, users) => {
        if (err) return next(err)
        let user = req.user
        let item = user.items.id(req.params.item)
        let subItems = item.subItems
        // let subItem = subItems.id(req.params.subItem)
        let subIndex = subItems.indexOf(subItems.id(req.params.subItem))
        subItems.splice(subIndex, 1, req.body)
        user.save((er) => {
            if (er) return next(er)
            res.render('subList/index', {
                users,
                user,
                item,
                name: req.query.name,
                sortKey
            })
        })
        
        
    })

}





const destroy = (req, res, next) => {
    console.log('Delete BigList item function runs')


    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

    let sortKey = req.query.sort || 'name';

    console.log(modelQuery);

    User.findOneAndUpdate(modelQuery)
    .sort(sortKey).exec((err, users) => {
        if (err) return next(err)
        let user = req.user
        let item = user.items.id(req.params.item)
        let subItems = item.subItems
        // let subItem = subItems.id(req.params.subItem)
        let subIndex = subItems.indexOf(subItems.id(req.params.subItem))
        subItems.splice(subIndex, 1)
        user.save((er) => {
            if (er) return next(er)
            res.render('subList/index', {
                users,
                user,
                item,
                name: req.query.name,
                sortKey
            })
        })
        
        
    })

}


const edit = (req, res, next) => {
    console.log('get form to Edit sublist item function runs')

    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

    let sortKey = req.query.sort || 'name';

    User.find(modelQuery)
    .sort(sortKey).exec((err, users) => {
        if (err) return next(err)
        let user = req.user
        let item = user.items.id(req.params.item)
        let subItem = item.subItems.id(req.params.subItem)
        
        res.render('subList/edit', {
            users, 
            user: req.user,
            name: req.query.name,
            item,
            subItem,
            sortKey
        })
    })
}

module.exports = {
    index,
    create,
    update,
    delete: destroy,
    edit
}