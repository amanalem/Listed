// subList routes

const router = require('express').Router()
const subListCtrl = require('../controllers/subList')


// index subList items
router.get('/:item/sublist', isLoggedIn, subListCtrl.index)

// create sublist item
router.post('/:item/sublist', isLoggedIn, subListCtrl.create)

// delete sublist item
router.delete('/:item/sublist/:subItem', isLoggedIn, subListCtrl.delete)




function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next()
    res.redirect('/auth/google')
  }


module.exports = router