const express = require('express')
const router = express.Router()
const subItemCtrl = require('../controllers/itemController')

// index Subitems
router.get('/:userId/items/:itemId/subitems', subItemCtrl.index)


// router.get('/:userId/:itemId/subitems', subItemCtrl.index)
// action="/listed/<%= user._id %>/items/<%= allItems._id/subitems"

router.post('/:userId/:itemId/subitems', subItemCtrl.create)
// action="/listed/<%= user._id %>/items/<%= allItems._id/subitems"

router.patch('/:userId/:itemId/subitems/:subItemId', subItemCtrl.update)
// action="/listed/<%= user._id %>/items/<%= allItems._id/subitems/<%= subItem._id %>"

router.delete('/:userId/:itemId/:subItemId', subItemCtrl.destroy)
// action="/listed/<%= user._id %>/items/<%= allItems._id/subitems/<%= subItem._id %>"



module.exports = router;