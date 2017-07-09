var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var middlewares = require('../middlewares/middlewares.js');

router.get('/', middlewares.checkNotLogin, function(req, res, next) {
  res.render('logup', {
    title: 'logup',
    user: req.session.user,
    isExisted: false
  });
});

router.post('/', middlewares.checkNotLogin, function (req, res) {
  var name = req.body.usn;
  var password = req.body.pswd;
  console.log(name);
  console.log(password);
  var newUser = new User ({
    'name': name,
    'password': password
  });
  newUser.save(function (err, user) {
    if (err) {
      return res.render('logup', {
        title: 'logup',
        user: req.session.user,
        isExisted: true
      });
    }
    req.session.user = user;
    //返回到首页
    res.redirect('/');
  })
});
module.exports = router;
