/*
var schedule = require('node-schedule');

var job = new schedule.Job(function() {});
job.on('scheduled', function(runOnDate) {
	console.log(runOnDate);

});

var rule = new schedule.RecurrenceRule();
rule.second = null; // fire every second
job.schedule(rule);
*/


var io = require('socket.io')(server );
io.on( ‘connection’, function( socket ) {
  console.log( ‘We have a connection!’ );
} );
