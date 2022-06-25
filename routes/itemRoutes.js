const express = require('express')
const router = express.Router()
const itemCtrl = require('../controllers/itemController')

// router.get('/:userId/items', itemCtrl.index)
// // action="/listed/<%= user._id %>/items"

// router.get('/:userId/items/new', itemCtrl.show)

// // router.get('/:userId/items/:itemId/subitems', itemCtrl.showSubItems)
// // Shows all item's subItems: action=""

// router.post('/:userId/items', itemCtrl.create)
// // action="/listed/<%= user._id %>/items"

// router.patch('/:userId/items/:itemId', itemCtrl.update)
// // action="/listed/<%= user._id %>/items/<%= allItems._id"

// router.delete('/:userId/items/:itemId', itemCtrl.destroy)
// // action="/listed/<%= user._id %>/items/<%= allItems._id"


// Fresh Start -------------

// index
router.get('/', itemCtrl.index)



module.exports = router;