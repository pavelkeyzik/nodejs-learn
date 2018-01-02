var express = require('express');
var fs = require('fs');
var path = require('path');
var log = require('./log')(module);

var app = express();
var staticDir = __dirname + '/public';

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {

  fs.readFile('public/index.html', function (err, info) {
      if(err) {
        log.error(err);
        res.sendStatus(500);
        res.send('Server error!');
        return;
      }
      res.sendFile(path.join(staticDir, 'index.html'));
  });

});

app.get('/admin', function (req, res) {

  fs.readFile('public/admin.html', function (err, data) {
     if(err) {
       log.error(err);
       res.statusCode(500);
       res.send('Sever error');
       return;
     }
     res.sendFile(path.join(staticDir, 'admin.html'));
  });

});

app.listen(port, function (req, res) {
  console.log('App runned on ' + port);
});
