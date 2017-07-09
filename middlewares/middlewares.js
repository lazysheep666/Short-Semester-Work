module.exports = {
  checkLogin: function (req, res, next) {
    if (!req.session.user) {
      res.redirect('/login');
    }
  next();
  },
  checkNotLogin: function (req, res, next) {
    if (req.session.user) {
      res.redirect('back');//返回之前的页面
    }
    next();
  },
  checkHasProduct: function (req, res, next) {
    if (!req.session.products.length) {
      res.redirect('/product');
    }
    next();
  }
}
