var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('components/about', { title: 'About' });
});

router.get('/contact', function(req, res, next) {
  res.render('components/contact', { title: 'Contact' });
});

module.exports = router;
