const express = require('express')
const router = express.Router()
const { auth } = require('../middleware/auth.js')

const userController = require('../controllers/userController');

router.get('/user', auth, userController.getUser);
router.post('/user', userController.create);
router.post('/user/login', userController.loginUser);
router.get('/user/:id', auth, userController.details);
router.put('/user/:id', auth, userController.updateUser);
router.delete('/user/:id', auth, userController.deleteUser);

module.exports = router;
