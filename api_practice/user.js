var mongoose = require("mongoose");

var user = new mongoose.schema({
	username: String,
	password: String, 
	token: String
});

module.exports = mongoose.model("user", user);
