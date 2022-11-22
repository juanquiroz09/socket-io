import express from "express";
import {Server as WebSocketServer} from 'socket.io';
import http from 'http';
import { Socket } from "dgram";
import { dirname } from "path";

const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server);

app.use(express.static('public'));
app.get('/hola-mundo', (req, res)=>{
    res.send('hola')
});

var messages = [{
    id: 1,
    text: 'Bienvenido al chat',
    nickname: 'bot-juanq'
}];

io.on('connection', (socket)=>{
   console.log("El cliente con IP " + socket.handshake.address + " se ha conectado");
   socket.emit('messages',messages);
   socket.on('add-message',(data)=>{
    messages.push(data);
    io.sockets.emit('messages', messages)
   });
});

server.listen(3000);
console.log("Server on port:", 3000);
