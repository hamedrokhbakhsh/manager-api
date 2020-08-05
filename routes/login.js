const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');
/* GET users listing. */
router.post('/', loginController.login);

module.exports = router;
