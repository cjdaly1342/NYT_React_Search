const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/nytarticlesearch",
	{
		useMongoClient: true
	}
);

// const articleSeed = [];

db.Article 
	.remove({})
	.then(() => db.Article.collection.insertMany(articleSeed))
	.then(data => {
		console.log(data.insertedIds.length + " Article Inserted!!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});