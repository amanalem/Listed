const express = require('express')
const router = express.Router()
const itemCtrl = require('../controllers/itemController')

router.get('/:userId/items/:itemId', itemCtrl.index)

// router.get('/:id', itemCtrl.show)

router.post('/', itemCtrl.create)

router.patch('/:id', itemCtrl.update)

router.delete('/:id', itemCtrl.destroy)

module.exports = router;