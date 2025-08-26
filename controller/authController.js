const express = require('express');
const router = express.Router();
const authService = require('../service/authService');

router.post('/register', authService.register);
router.post('/login', authService.login);

module.exports = router;
