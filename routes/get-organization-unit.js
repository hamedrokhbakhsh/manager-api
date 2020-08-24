const express = require('express');
const router = express.Router();
const getOrganizationUnite = require('../controllers/get-organization-unit');
const checkAuth = require('../middleware/check-auth')
/* POST users listing. */
router.post('/', checkAuth, getOrganizationUnite.getOrganizationUnit);

module.exports = router;
