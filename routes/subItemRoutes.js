const express = require('express')
const router = express.Router()
const subItemCtrl = require('../controllers/itemController')

router.get('/:userId/items/:itemId/subitems', subItemCtrl.index)

router.post('/:userId/items/:itemId/subitems', subItemCtrl.create)

router.delete('/:UserId/items/:itemId/subitems/:subItemId', subItemCtrl.destroy)

router.patch('/:UserId/items/:itemId/subitems/:subItemId', subItemCtrl.update)



module.exports = router;