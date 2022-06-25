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

// Gets form to add to bigList item
const newItem = (req, res) => {

}

module.exports = {
    index,
    new: newItem
}