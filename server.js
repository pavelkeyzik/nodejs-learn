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

  if(urlParsed.path == '/') {
    next();
  } else {
    res.status(403);
    res.send({
      success: false,
      message: 'No token provided.'
    })
  }
});

app.use('/admin', appRoutes);

app.get('/admin', function (req, res) {
  res.sendFile(path.join(ROOT, 'admin.html'));
});

app.use(function(req, res, next) {
  res.status(404);
  res.sendFile(path.join(ROOT, '404.html'));
});

app.listen(process.env.PORT || 8080);
