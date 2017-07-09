var mongoose = require('./db.js');

var ProductSchema = new mongoose.Schema({
	cate: String,
	name: String,
	content1: String,
	content2: String,
	content3: String,
	content4: String,
	content5: String,
	content6: String,
	img: String,
	price: Number
});

var User = mongoose.model('Product', ProductSchema);

module.exports = User;
