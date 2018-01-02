var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/admin', (req, res) => {
  res.send('Admin page');
});

app.listen(port, () => {
  console.log(`App runned on ${port}`)
});
