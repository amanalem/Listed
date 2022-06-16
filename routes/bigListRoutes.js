const express = require('express')
const router = express.Router()
const bigListCtrl = require('../controllers/bigListController')

// show form to update bigList name
router.get('/listed', bigListCtrl.show)
// action=""


// name your big list
router.post('/listed', bigListCtrl.create)

// action="/listed/"
router.patch('/listed', bigListCtrl.update)



module.exports = router;