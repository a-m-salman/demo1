var express = require('express');
const bodyParser= require('body-parser')
const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
var assert= require('assert');
const MongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost:27017/user";


MongoClient.connect(url, (err, database) => {
   if (err) return console.log(err);
	  db = database;
	  app.get('/', (req, res) => {
				 db.db("user").collection('user').find().toArray(function(err, results) {
				  
    			res.render('index.ejs', {users: results})
				})



		})
  });

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})