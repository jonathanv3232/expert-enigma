var express = require("express");
var bp = require("body-parser");
var mongoose = require("mongoose");
var bcrypt = require("bycrypt-nodejs");
var ejs = require("ejs");

var user = require("./user");

var app = express();

var currentUser;

app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

function apiTokenCheck(req, res, next) {
	var auth_token = req.body.token || req.get("token");
	user.findOne({"token": auth_token}, function (err, user){
		if(err) {
			console.log(err);
		} else {
			next();
		}
	})

}

app.get("/", function(req,res){
	res.render("index");
});

app.get("/login", function(req,res){
	res.render("login");
});

app.get("/signup", function(req,res){
	res.render("signup");
});

app.get("/user", function(req,res){
	res.render("user", {
		user: currentUser
	});
});


app.get("/data", apiTokenCheck, function(req, res){

	user.find({}, function(){
				
	})
};



mongoose.connect("mongodb://localhost/api");
app.listen(8080);



app.post("/login", function(req, res){ 

	user.findOne({"username": req.body.username }, function(err, user){ 
		if(err){
			console.log(err);
		} else {
			if(bcrypt.compareSync(req.body.password, user.password)) {
				currentUser = user;
				res.redirect("/user");
			} else {
				res.json({
					"success": false,
					"reason": "wrong username or password"
				});
			}
		}
		
	});
});

app.post("/signup", function(req, res){
	new user({
		username: req.body.username,
		password: bcrypt.hashSync(req.body.password),
		token: id()
	}).save(function(err) {
		if(err) {
			console.log(err);
		} else {
			res.redirect("/login");
		}
	})
});



