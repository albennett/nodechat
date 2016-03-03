'use strict';

const express = require('express')
const app = express()
const server = require('http').createServer(app) //express() raw node
const io = require('socket.io')(server)

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('hello')
})

server.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
