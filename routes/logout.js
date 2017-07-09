var express = require('express');
var router = express.Router();
var middlewares = require('../middlewares/middlewares.js');

router.get('/', middlewares.checkLogin, function(req, res, next) {
	req.session.user = null;
	res.redirect('/');
});


module.exports = router;
