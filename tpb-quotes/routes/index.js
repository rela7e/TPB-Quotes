var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trailer Park Boys Quotes' });
});

module.exports = router;
