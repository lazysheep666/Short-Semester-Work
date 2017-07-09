var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var middlewares = require('../middlewares/middlewares.js');

router.get('/', middlewares.checkNotLogin, function(req, res, next) {
  res.render('login', {
    title: null,
    user: req.session.user,
    isUsnOk: true,
    isPswdOk: true
  });
});

router.post('/', middlewares.checkNotLogin, function (req, res, next) {
  User.findOne({
    'name': req.body.usn
  })
  .exec(function (err, user) {
    if (!user) {
      return res.render('login', {
        title: null,
        user: req.session.user,
        isUsnOk: false,
        isPswdOk: true
      });
    }
    //检查密码是否一致
    if (user.password != req.body.pswd) {
      //密码错误跳转到登陆页
      return res.render('login', {
        title: null,
        user: req.session.user,
        isUsnOk: true,
        isPswdOk: false
      });
    }
    req.session.user = user;
    req.session.products = [];
    //登陆成功后跳转到主页
    res.redirect('/');
  });
})

module.exports = router;
