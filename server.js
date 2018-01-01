var http = require('http');

var server = new http.Server();

server.listen(proccess.env.PORT || 3030, 'localhost');

server.on('request', function(req, res) {
    res.end('Hello World!');
});
