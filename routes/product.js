var express = require('express');
var router = express.Router();
var Product = require('../models/product.js');

router.get('/', function(req, res, next) {
  res.render('product', {
    title: null,
    user: req.session.user
  });
});

router.get('/computer', function(req, res, next) {
  Product.find({
    'cate': 'computer'
  })
  .exec(function (err, products) {
    res.render('products', {
      title: null,
      user: req.session.user,
      products: products
    });
  });
});


router.get('/phone', function(req, res, next) {
  Product.find({
    'cate': 'phone'
  })
  .exec(function (err, products) {
    res.render('products', {
      title: null,
      user: req.session.user,
      products: products
    });
  });
});

router.get('/pad', function(req, res, next) {
  Product.find({
    'cate': 'pad'
  })
  .exec(function (err, products) {
    res.render('products', {
      title: null,
      user: req.session.user,
      products: products
    });
  });
});
module.exports = router;
