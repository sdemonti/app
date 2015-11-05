var express = require('express');
var app = express();

var server = require('http').Server(app);

app.use(express.static(__dirname));
var io = require('socket.io')(server);

server.listen(3000, function () {
    console.log('listening on *:3000');
});

io.on('connection', function (socket) {
    console.log('We have a connection!');
});


