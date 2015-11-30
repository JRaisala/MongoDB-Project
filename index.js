var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
var database = require('./modules/database.js');
var queries = require('./modules/queries.js');
var person = require('./modules/article.js');



app.use(bodyParser.urlencoded());



//=====================Middlewares========================


app.use(function(req,res,next){
  
  console.log(req.method);
  console.log(req.path);
  console.log(__dirname);
  console.log(database.Article);
  database.myFunction();
  //Send request forward in stack
  next();
});

app.use('/',express.static(path.join(__dirname, 'views')));
app.use('/css',express.static(path.join(__dirname, 'css')));
app.use('/controllers',express.static(path.join(__dirname, 'controllers')));
app.use('/lib',express.static(path.join(__dirname, 'lib')));



//=====================ROUTERS============================//

app.get("/articles",function(req,res){
  queries.getAllArticles(req,res);
});


app.listen(27017);

