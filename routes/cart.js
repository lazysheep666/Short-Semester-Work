var express = require('express');
var router = express.Router();
var middlewares = require('../middlewares/middlewares.js');
var Product = require('../models/product.js');
var Order = require('../models/order.js');

router.get('/', middlewares.checkLogin, function(req, res, next) {
  res.render('cart', {
    title: 'cart',
    user: req.session.user,
    products: req.session.products
  });
});

router.get('/product/:product', function (req, res, next) {
  Product.findOne({
    'name': req.params.product
  })
  .exec(function (err, product) {
    var isHasProduct = req.session.products.some(function (item, index) {
      return item.name === product.name;
    });
    if (!isHasProduct) {
      req.session.products.push(product);
    }
    res.redirect('/cart');
  })
});

router.get('/delete/:product', function (req, res, next) {
  var index = 0;
  var len = req.session.products.length;
  for (var i = 0; i < len; i++) {
    if (req.session.products[i].name === req.params.product) {
      break;
    }
    ++index;
  }
  req.session.products.splice(index, 1);
  res.redirect('/cart');
});

router.post('/buy', middlewares.checkHasProduct, function (req, res, next) {
  var nums = [];
  for (var num in req.body) {
    nums.push(req.body[num]);
  }
  nums.pop();

  var products = [];
  for (var i = 0; i < nums.length; i++) {
    var product = {
      productName: req.session.products[i].name,
      productNum: nums[i]
    }
    products.push(product);
  }

  var newOrder = new Order({
    'username': req.session.user.name,
    'products': products
  })
  newOrder.save(function (err, order) {
    if (err) {
      return res.render('buywrong', {
        title: null,
        user: req.session.user
      });
    }

    req.session.products = [];
    res.render('buyed', {
      title: null,
      user: req.session.user
    })
  })
});

module.exports = router;
