const express = require('express');
const bodyParser= require('body-parser')
const app = express()
const assert= require('assert');
// const mdb = require('mongodb');
const mongoose = require('mongoose');

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

// const MongoClient = mdb.MongoClient

// const url = "mongodb://localhost:27017/user";

mongoose.connect('mongodb://localhost/user');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!

// });



//************************************* mongoosJS 
var userSchema = mongoose.Schema({
    name: String,
    age: String,
    gender: String

},{collection: 'user'});

var user = mongoose.model('user', userSchema);

var x = new user({name: 'taha',age: '20',gender: 'm'});


//  x.save(function (err, x) {
//   if (err) return console.error(err);
//   console.log("Done");
// });

user.find(function (err, user) {
  if (err) return console.error(err);
  console.log(user);

  	  app.get('/', (req, res) => {
    			res.render('index.ejs', {users: user})
		})
})




//******************************************  MongoDB 


// MongoClient.connect(url, (err, database) => {
//    if (err) return console.log(err);
// 	  db = database;
// 	  app.get('/', (req, res) => {
// 				 db.db("user").collection('user').find().toArray(function(err, results) {
				  
//     			res.render('index.ejs', {users: results})
// 				})



// 		})
//   });

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})