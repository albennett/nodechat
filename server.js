'use strict';

const express = require('express');
const app = express();
const pg = require('pg').native
const server = require('http').createServer(app); //express() raw node
const ws = require('socket.io')(server);

const PORT = process.env.PORT || 3000;
const POSTGRES_URL = process.env.POSTGRES_URL || 'postgres://localhost:5432/nodechat'
let db

app.set('view engine', 'jade');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

server.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});

ws.on('connection', socket => {
  console.log("socket connected");

socket.on('sendChat', msg => {
  console.log("msg", msg);
  socket.broadcast.emit('receiveChat', msg)
  })
});
