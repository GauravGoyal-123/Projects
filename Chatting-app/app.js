const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const socketio = require('socket.io');
const io = socketio(server);

app.use('/', express.static(path.join(__dirname,'public')));

const username = {};

io.on('connection',(socket)=>{
    socket.on('send-msg',(data)=>{
        io.emit('receive-msg',{
            msg:data.msg,
            username:username[socket.id]
        })
    })

    socket.on('login',(data)=>{
        username[socket.id] = data.username;
    })
})



const port = 3000;
server.listen(port,()=>{
    console.log('Connected');
})