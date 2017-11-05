// Dependencies
// ==================================================================================
var express = require("express");
var request = require("request");
var cheerio = require("cheerio");
var bodyParser = require("body-parser");
var logger = require("morgan");
var axios = require("axios");
var mongoose = require("mongoose");


// Initialize Express
var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
	extended: false
}));

// Make Public
app.use(express.static("public"));
var MONGODB_URI = process.env.MONGODB_UPR;

var db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI, {
	useMongoClient: true
});

db.on("error", function(error) {
	console.log("Mongoose Error: ", error);
});

db.once("open", function() {
	console.log("Mongoose Connection Successful");
});


var Article = require('./models/Article.js');

app.get('/', function(req, res) {
	res.send('./public/index.html');
});

app.get('/api/saved', function(req, res) {
	Article.find({}, function(err, doc) {
		if (err) {
			console.log(err);
		} else {
			res.json(doc);
		}
	});
});

app.post('/api/saved', function(req, res) {

})

app.listen(process.env.PORT || 3000, function() {
	console.log('APP running on PORT 3000');
});