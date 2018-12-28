require("dotenv").config();


var express = require("express");
var app = express();
 

app.get('/', (req, res) =>{
	if(process.env.NODE_ENV == "dev") {
		res.json({
			"user": process.env.DB_USER,
			"pass": process.env.DB_PASS
		});
	} else {
		res.json({
			"user": "Does not exit", 
			"pass": "User does not exit"
		});
	}		
});

app.listen(process.env.PORT || 8080);



console.log("the server is running");

