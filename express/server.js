const express = require('express');
const open = require('open');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.dev.config');
const movies = require('./movies');

const compiler = webpack(webpackConfig);
const app = express();
const port = 8080;

app.set('port', 8080);

// Middleware

process.env.NODE_ENV = 'development';

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../built/index.html')));

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

app.use((req, res, next) => {
  if (req.url === '/blogs') {
    res.end(JSON.stringify(movies));
  } else {
    next();
  }
});

app.use((req, res, next) => {
  if (req.url === '/forbidden') {
    next(new Error('wops, denied'));
  } else {
    next();
  }
});

app.use((req, res, next) => {
  if (req.url === '/test') {
    res.end('Test');
  } else {
    next();
  }
});

app.use((req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  res.status(404).send('Page Not Found Sorry');
});

app.listen(port, () => open(`http://localhost:${port}`));
