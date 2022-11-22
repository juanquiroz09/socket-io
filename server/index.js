import express from "express";
import {Server as WebSocketServer} from 'socket.io';
import http from 'http';
import { Socket } from "dgram";

const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server);

app.use(express.static('public'))

app.get('/hola-mundo', (req, res)=>{
   res.status(200).send("Hola");
});

io.on('connection', ()=>{
console.log("El cliente con la IP " + Socket.handshake.adress + " se ha conectado")
});

server.listen(6677, ()=>{
  console.log("Sever on port", 6777)
});