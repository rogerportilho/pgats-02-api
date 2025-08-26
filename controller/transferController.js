const express = require('express');
const router = express.Router();
const transferService = require('../service/transferService');

router.post('/', transferService.transfers);

module.exports = router;
