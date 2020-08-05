var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/check-auth')

/* GET users listing. */
router.get('/',checkAuth , function(req, res, next) {

  res.status(200).json({
    data: req.userData.userID
  })
});

module.exports = router;
