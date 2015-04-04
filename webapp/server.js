var express = require('express');

var DEFAULT_PORT = 8080;
var PORT = process.env.PORT || DEFAULT_PORT;

var app = express();
app.get('/', function (req, res) {

	var remoteIp = req.socket.remoteAddress;
	var localIp = req.socket.remoteAddress;
	console.log('Request from:%s local: %s', remoteIp, localIp);
	res.send('Hello %s\n', remoteIp);
});

var server = app.listen(PORT, function() {
	var host = server.address().address;
  	var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
});