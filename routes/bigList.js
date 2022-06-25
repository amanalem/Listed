// bigList Routes

const router = require('express').Router()
const bigListCtrl = require('../controllers/bigList')


// index
router.get('/biglist', isLoggedIn, bigListCtrl.index)

// create new bigList item

// new: get form to create new bigList item
router.get('/biglist/newitem', isLoggedIn, bigListCtrl.new)




function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next()
    res.redirect('/auth/google')
  }


module.exports = router