var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open', function() {
	app.listen(3000);
});
