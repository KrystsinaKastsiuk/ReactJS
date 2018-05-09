var express = require('express');
var open = require('open');
var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('../webpack.dev.config');
var http = require('http');
var movies = require('./movies');

var compiler = webpack(webpackConfig);
var app = express();
var port = 3000;

app.set('port', 3000);

// Middleware

process.env.NODE_ENV = 'development';

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../built/index.html')));

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

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

app.listen(port, () => open(`http://localhost:${port}`));