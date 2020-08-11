const express = require('express');
const router = express.Router();
const getDebtorAmount = require('../controllers/get-debtor-amount-limit');
const checkAuth = require('../middleware/check-auth')
/* GET users listing. */
router.post('/', checkAuth, getDebtorAmount.getDebtorAmounts);

module.exports = router;
