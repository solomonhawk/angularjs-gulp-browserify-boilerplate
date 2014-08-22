var config  = require('../config.json');
var express = require('express');
var morgan  = require('morgan');

var server = express();

// log all requests to the console
server.use(morgan('dev'));
server.use(express.static(config.dest.root));

// Serve index.html for all routes to leave routing up to Angular
server.all('/*', function(req, res) {
    res.sendFile('index.html', { root: 'build' });
});

// Start webserver
server.listen(config.serverport);