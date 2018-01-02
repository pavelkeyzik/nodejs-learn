var express = require('express');
var url = require('url');
var log = require('./log')(module);

var app = express();

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('Home Page 1');
  console.log(req.method, req.url);
});

app.get('/admin', function (req, res) {
  var urlParsed = url.parse(req.url, true);

  log.info(urlParsed.query.message);
  log.debug(urlParsed.query.message);

  if(urlParsed.query.message == undefined) log.error('params not found');

  res.send('Admin page!!');

});

app.listen(port, function (req, res) {
  console.log('App runned on ' + port);
});
