var mongoose = require('mongoose');
var settings = require('../settings.js');
var URL = 'mongodb://' + settings.host + ':' + settings.port + '/' + settings.db;
mongoose.connect(URL);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + URL);
});


mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});


mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;
