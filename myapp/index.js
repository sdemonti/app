var express = require('express');
<<<<<<< Updated upstream
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

=======
var schedule = require('node-schedule');
var app = express();


var job = new schedule.Job(function() {});
job.on('scheduled', function(runOnDate) {
	console.log(runOnDate);
	app.get('/', function (req, res) {
 		res.redirect( '/' );
	});
});

var rule = new schedule.RecurrenceRule();
rule.second = null; // fire every second
job.schedule(rule);

>>>>>>> Stashed changes
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
<<<<<<< Updated upstream
});
=======
});
>>>>>>> Stashed changes
