var express = require('express');
var redis = require("redis");
var app = express();
var schedule = require('node-schedule');

var server = require('http').Server(app);
var client = redis.createClient(6379, "docker");

app.use(express.static(__dirname));
var io = require('socket.io')(server);

server.listen(3000, function () {
    console.log('listening on *:3000');
});

var plants = [
    [
        "plant:1",
        "name1"
    ],
    [
        "plant:2",
        "name2"
    ]
];


var sockets = [];
io.on('connection', function (socket) {
    sockets.push(socket.id);
    client.hset(  [
        "plant:1",
        "name1"
    ], function (err, res) {});
    console.log('We have a connessction!' + socket.id);
});


var rule = new schedule.RecurrenceRule();
rule.second =  new schedule.Range(0, 59, 1);

var j = schedule.scheduleJob(rule, function(){
    console.log(sockets);
    console.log(client.hget("plant:1", function (err, res) {}));
});




// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});
/*
client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});
*/