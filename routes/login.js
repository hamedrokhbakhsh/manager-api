const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');
/* GET users listing. */
router.get('/', loginController.login);

module.exports = router;
