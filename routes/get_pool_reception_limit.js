const express = require('express');
const router = express.Router();
const getPoolReceptionLimit = require('../controllers/get_pool_reception_limit');
const checkAuth = require('../middleware/check-auth')
/* GET users listing. */
router.post('/', checkAuth, getPoolReceptionLimit.getPoolReceptionLimit);
module.exports = router;
