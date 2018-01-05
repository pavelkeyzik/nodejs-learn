var express = require('express');
var path = require('path');
var url = require('url');

var ROOT = __dirname + '/public/';

var app = express();
var appRoutes = express.Router();
var hbs = require('express-handlebars');

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: path.join(ROOT, 'views/layouts')}));
app.set('views', path.join(ROOT, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(ROOT));

app.get('/', function(req, res) {
  res.render('index');
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
  res.render('admin');
});

app.use(function(req, res, next) {
  res.status(404);
  res.render('404');
});

app.listen(process.env.PORT || 8080);
