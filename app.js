const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const messages = []


io.on('connection', (socket) => {
  const username = socket.handshake.query.username
  socket.on('message', (data) => {
    console.log("Estou entrando aqui ó")
    const message = {
      message: data.message,
      senderUsername: username,
      sentAt: Date.now()
    }
    console.log(message)
    messages.push(message)
    io.emit('newMessage', message)

  })
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});