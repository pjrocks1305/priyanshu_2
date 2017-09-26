var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('welcome to abcd in priyanshu_2');
});

router.get('/gate', function(req, res, next) {
    res.send('use api /gate in abcd');
});

router.get('/cat', function(req, res, next) {
    res.send('use api /cat in abcd');
});

router.get('/gmat', function(req, res, next) {
    res.send('use api /gmat in abcd');
});
module.exports = router;
