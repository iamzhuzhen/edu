var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/authenticate', function(req, res, next) {
  var param = req.body;
  res.redirect('/main');
});

router.get('/main', function(req, res, next) {
  var param = req.body;
  res.render('main', { title: 'Express' });
});

module.exports = router;
