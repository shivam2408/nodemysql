var http = require('http');
var express = require('express');
var port = normalizePort(process.env.PORT || '1000');
var app = express();
var server = http.createServer(app);
server.listen(port);

io = require('socket.io')(server);

///ROUTES
var routes = require('./routes/index')(io);
var users = require('./routes/users');