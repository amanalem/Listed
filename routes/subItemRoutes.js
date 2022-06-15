const express = require('express')
const router = express.Router()
const subItemCtrl = require('../controllers/itemController')

router.get('/:userId/items/:itemId/subitems', subItemCtrl.index)
// action="/listed/<%= user._id %>/items/<%= allItems._id/subitems"

router.post('/:userId/items/:itemId/subitems', subItemCtrl.create)
// action="/listed/<%= user._id %>/items/<%= allItems._id/subitems"

router.patch('/:UserId/items/:itemId/subitems/:subItemId', subItemCtrl.update)
// action="/listed/<%= user._id %>/items/<%= allItems._id/subitems/<%= subItem._id %>"

router.delete('/:UserId/items/:itemId/subitems/:subItemId', subItemCtrl.destroy)
// action="/listed/<%= user._id %>/items/<%= allItems._id/subitems/<%= subItem._id %>"



module.exports = router;