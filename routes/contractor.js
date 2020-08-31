const express = require('express');
const router = express.Router();
const contractor = require('../controllers/contractor');



router.post('/login', contractor.login);

module.exports = router;
