const express = require('express');
const router = express.Router();
const userService = require('../service/userService');

router.get('/', userService.getAllUsers);

module.exports = router;
