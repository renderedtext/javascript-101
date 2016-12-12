'use strict';

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve('../public/index.html'));
});

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var io = require('socket.io')(server);
io.on('connection', function (socket) {
  console.log('a user connected');

  socket.on('disconnect', function () {
    console.log('a user has disconnected');
  });

  socket.on('msg', function (msg) {
    console.log(msg);
    socket.broadcast.emit('msg', msg);
  });
});