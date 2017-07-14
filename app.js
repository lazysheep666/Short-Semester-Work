var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var settings = require('./settings.js');

var index = require('./routes/index');
var login = require('./routes/login');
var logup = require('./routes/logup');
var join = require('./routes/join');
var logout = require('./routes/logout');
var about = require('./routes/about');
var wrong = require('./routes/wrong');
var product = require('./routes/product');
var cart = require('./routes/cart')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

//session
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: settings.cookieSecret,
  key: settings.db,
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},
  store: new MongoStore({
    url: 'mongodb://localhost:27017/app'
  })
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//router
app.use('/', index);
app.use('/login', login);
app.use('/logup', logup);
app.use('/join', join);
app.use('/logout', logout);
app.use('/about', about);
app.use('/product', product);
app.use('/cart', cart);
app.use('/*', wrong);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
