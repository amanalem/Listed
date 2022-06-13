const express = require('express')
const router = express.Router()
const subItemCtrl = require('../controllers/itemController')

router.get('/:userId/big-list/:itemId/lil-list', subItemCtrl.index)

// router.get('/:id', subItemCtrl.show)

router.post('/', subItemCtrl.create)

router.patch('/:id', subItemCtrl.update)

router.delete('/:id', subItemCtrl.destroy)

module.exports = router;