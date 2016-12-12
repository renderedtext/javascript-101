const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('../public/index.html'));
});

const server = app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});

const io = require('socket.io')(server);
io.on('connection', socket => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('a user has disconnected');
  });

  socket.on('msg', msg => {
    console.log(msg);
    socket.broadcast.emit('msg', msg);
  });

});
