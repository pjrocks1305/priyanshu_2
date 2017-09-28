var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource project priyanshu_2');
});

router.get('/count', function(req, res, next) {
    res.send('use api /count in users project priyanshu_2');
});

router.get('/number', function(req, res, next) {
    res.send('use api /number in users project priyanshu_2');
});

router.get('/author', function(req, res, next) {
    res.send('use api /exam in users project priyanshu_2');
});
module.exports = router;
