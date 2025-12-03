const router = require('express').Router()

const validateToken = require('../middlewares/validateToken')

const userController = require('../controllers/user')

// Controllers -----

router.get('/:userid', validateToken, userController.details_get)

router.get('/', validateToken, userController.list_get)

router.post('/', validateToken, userController.create_post)

router.delete('/:userid', validateToken, userController.delete_delete)

// Export -----
module.exports = router
