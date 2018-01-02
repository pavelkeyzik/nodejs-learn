var express = require('express');
var path = require('path');
var url = require('url');

var ROOT = __dirname + '/public/';

var app = express();
var appRoutes = express.Router();

app.use(express.static(ROOT));

app.get('/', function(req, res) {
    res.sendFile(path.join(ROOT, 'index.html'));
});

appRoutes.use(function(req, res, next) {
  var urlParsed = url.parse(req.url, true);

  if(urlParsed.path == '/admin/pavel') {
    next();
  } else {
    res.status(403).send({
      success: false,
      message: 'No token provided.'
    })
  }
});

app.use('/', appRoutes);

app.get('/admin/:name', function (req, res) {
  res.sendFile(path.join(ROOT, 'admin.html'));
});

app.listen(process.env.PORT || 8080);
