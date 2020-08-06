const express = require('express');
const router = express.Router();
const getCreditorAmountsLimit = require('../controllers/get-creditor-amounts-limit');
const checkAuth = require('../middleware/check-auth')
/* GET users listing. */
router.post('/', checkAuth, getCreditorAmountsLimit.getCreditorAmounts);

module.exports = router;
