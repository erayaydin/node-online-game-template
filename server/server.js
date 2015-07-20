var express = require('express');
var app     = express();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);
var path    = require('path');

var config  = require('./config.json');

app.get('/', function(req, res) {
	res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.use(express.static(__dirname + '/../public'));

io.on('connection', function(socket) {
	console.log("New connection!");

	socket.on('disconnect', function() {
		console.log("Disconnect!");
	});
});

var serverPort = process.env.PORT || config.port;
http.listen(serverPort, function() {
	console.log("Server is listening on port " + serverPort);
});
