const express = require('express')
const router = express.Router()
const bigListCtrl = require('../controllers/bigListController')

// show form to update bigList name
router.get('/listed', bigListCtrl.show)


module.exports = router;