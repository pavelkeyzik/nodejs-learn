var express = require('express');
var path = require('path');

var ROOT = __dirname + '/public/';

var app = express();
app.use(express.static(ROOT));


app.get('/', function(req, res) {
    res.sendFile(path.join(ROOT, '/index.html'));
});

app.get('/admin/:name', function (req, res) {
    console.log(req.params.name);
    res.sendFile(path.join(ROOT, 'admin.html'));
});

app.listen(8080);