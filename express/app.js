var express = require('express');
var http = require('http');
var movies = require('./movies');

var app = express();
app.set('port', 3001);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// Middleware

app.use(function(req, res, next) {
  if (req.url == '/blogs') {
    res.end(JSON.stringify(movies));
  } else {
    next();
  }
});

app.use(function(req, res, next) {
  if (req.url == '/forbidden') {
    next(new Error("wops, denied"));
  } else {
    next();
  }
});

app.use(function(req, res, next) {
  if (req.url == '/test') {
    res.end("Test");
  } else {
    next();
  }
});

app.use(function(req, res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');  
  res.status(404).send("Page Not Found Sorry");
});