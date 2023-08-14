const app = require('express')();
const  cors = require('cors')
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:3000']
  }
})

app.use(cors());

io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('my message', (msg) => {
    console.log('message: ' + msg);
    io.emit("connection")
    console.log("user connceted");
  });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
http.listen(3001,() => {
  console.log('listening on:3000');
});

