var express = require('express');
var router = express.Router();
var middlewares = require('../middlewares/middlewares.js');

router.get('/', middlewares.checkLogin, function (req, res, next) {
	res.render('join', {
		title: 'join',
		user: req.session.user
	});
})

module.exports = router;
