var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`App runned on ${port}`)
});
