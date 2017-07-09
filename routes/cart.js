var express = require('express');
var router = express.Router();
var middlewares = require('../middlewares/middlewares.js');
var Product = require('../models/product.js');

router.get('/', middlewares.checkLogin, function(req, res, next) {
  res.render('cart', {
    title: null,
    user: req.session.user,
    products: req.session.products
  });
});
router.get('/:product', middlewares.checkLogin, function (req, res, next) {
  Product.findOne({
    'name': req.params.product
  })
  .exec(function (err, product) {
    req.session.products.push(product);
    res.redirect('/cart');
  })
});

module.exports = router;
