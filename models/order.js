
var mongoose = require('./db.js');

var OrderSchema = new mongoose.Schema({
  username: String,
  products: Array
});

var Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
