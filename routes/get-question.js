const express = require('express');
const router = express.Router();
const getQuestion = require('../controllers/get-question')
/* GET home page. */
router.post('/', getQuestion.getQuestion);
/*
router.get('/', function(req, res, next) {
    res.render('index.html');
});
*/

module.exports = router;
