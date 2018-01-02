var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('Hello world! Check it out!');
=======
  res.send('Hello world!');
>>>>>>> 5cdd20c51993a996c3408e262b99da53abf62adc
});

app.listen(port, () => {
  console.log(`App runned on ${port}`)
});
