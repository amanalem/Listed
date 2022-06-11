const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userController')

router.get('/', userCtrl.index)

router.get('/:id', userCtrl.show)

router.post('/', userCtrl.create)

router.patch('/:id', userCtrl.update)

router.delete('/:id', userCtrl.destroy)

module.exports = router;