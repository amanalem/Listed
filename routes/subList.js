// subList routes

const router = require('express').Router()
const subListCtrl = require('../controllers/subList')


// index subList items
router.get('/:item/sublist', isLoggedIn, subListCtrl.index)

// create sublist item
router.post('/:item/sublist', isLoggedIn, subListCtrl.create)

// update sublist item
router.put('/:item/sublist/:subItem', isLoggedIn, subListCtrl.update)

// delete sublist item
router.delete('/:item/sublist/:subItem', isLoggedIn, subListCtrl.delete)

// get form to edit sublist item
router.get('/:item/sublist/:subItem/edit', isLoggedIn, subListCtrl.edit)




function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next()
    res.redirect('/auth/google')
  }


module.exports = router