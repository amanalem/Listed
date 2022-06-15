const express = require('express')
const router = express.Router()
const itemCtrl = require('../controllers/itemController')

router.get('/:userId/items', itemCtrl.index)
// action="/listed/<%= user._id %>/items"

router.post('/:userId/items', itemCtrl.create)
// action="/listed/<%= user._id %>/items"

router.patch('/:userId/items/:itemId', itemCtrl.update)
// action="/listed/<%= user._id %>/items/<%= allItems._id"

router.delete('/:userId/items/:itemId', itemCtrl.destroy)
// action="/listed/<%= user._id %>/items/<%= allItems._id"


module.exports = router;