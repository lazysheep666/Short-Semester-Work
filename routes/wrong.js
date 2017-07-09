var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('wrong', {
    title: null,
    user: req.session.user
  });
});

module.exports = router;
