const express = require('express');
const app = express();
const path = require('path');
const socketio = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketio(server);


const user = {};

app.use('/', express.static(path.join(__dirname, '/public')));

io.on('connection', (socket) => {
    socket.on('login', (data) => {
        user[socket.id] = data.name;
    });

    socket.on('send_msg', (data) => {

        io.emit('recieved_msg', {
            msg: data.msg,
            name: user[socket.id]
        })
    })
})

server.listen(process.env.PORT || 3001, () => {
    console.log("Server running on port 3001");
})
//writing just to see changes okk......
