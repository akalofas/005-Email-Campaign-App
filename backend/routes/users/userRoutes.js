const express = require('express');
const { register } = require('../../controllers/userController/register');
const { login } = require('../../controllers/userController/login');
const { logout } = require('../../controllers/userController/logout');
const { verifyEmail } = require('../../controllers/userController/verifyEmail');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/verify-email', verifyEmail);

module.exports = router;