var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express project priyanshu_2' });
});

router.get('/count', function(req, res, next) {
    res.send('use api /count in index project priyanshu_2');
});

router.get('/number', function(req, res, next) {
    res.send('use api /number in index project priyanshu_2');
});

router.get('/profile', function(req, res, next) {
    res.send('use api /profile in index project priyanshu_2');
});
module.exports = router;

