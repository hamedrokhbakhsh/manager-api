const express = require('express');
const router = express.Router();
const getAllStatusController = require('../controllers/get-all-report-status.js');
const checkAuth = require('../middleware/check-auth')
/* GET users listing. */
router.post('/', checkAuth, getAllStatusController.getAllReportStatus);

module.exports = router;
