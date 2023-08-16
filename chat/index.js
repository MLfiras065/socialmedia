// const express = require('express')
// const http = require('http')
// const { Server } = require('socket.io')

// const app = express()
// const server = http.createServer(app)
// const io = require('socket.io')(server,{
//     cors : {
//         origin :"http://192.168.104.7:8080",
//         methods :["GET", "POST"]
//     }
// })
// let chatRooms=[]
// console.log("io",io.on("connection", (socket) => {
//     // add new User
//     console.log(`⚡: ${socket.id} user just connected!`);
//     socket.on("createRoom", (roomName,socketid) => {
//         // socket.join(roomName);
//         //👇🏻 Adds the new group name to the chat rooms array
//         chatRooms.unshift({ id:socketid, roomName, messages: [] });
//         //👇🏻 Returns the updated chat rooms via another event
//         socket.emit("roomsList", chatRooms); });
//     socket.on("disconnect", () => {
//         console.log("User Disconnected", activeUsers);
//         // send all active users to all users
//         io.emit("get-users", activeUsers);
//     });
//     socket.on("send-message", (data) => {
//         const { receiverId , message} = data;
//         console.log("data",data.message);
//         socket.broadcast.emit("receive-message", data)
//         console.log(socket.id);
//     });
// }));
// io.on("connection", (socket) => {
//     // add new User
//     console.log(`⚡: ${socket.id} user just connected!`);
//     socket.on("createRoom", (roomName,socketid) => {
//         // socket.join(roomName);
//         //👇🏻 Adds the new group name to the chat rooms array
//         chatRooms.unshift({ id:socketid, roomName, messages: [] });
//         //👇🏻 Returns the updated chat rooms via another event
//         socket.emit("roomsList", chatRooms); });
//     socket.on("disconnect", () => {
//         console.log("User Disconnected", activeUsers);
//         // send all active users to all users
//         io.emit("get-users", activeUsers);
//     });
//     socket.on("send-message", (data) => {
//         const { receiverId , message} = data;
//         console.log("data",data.message);
//         socket.broadcast.emit("receive-message", data)
//         console.log(socket.id);
//     });
// });
// io.emit('connection')
// console.log("io.emit",io.emit("connection"));
// server.listen(8080, () => {
//     console.log('Server started   - http://localhost:8080');
//   })

const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = new Server(server,{
    perMessageDeflate: {
      threshold: 2048, // defaults to 1024
  
      zlibDeflateOptions: {
        chunkSize: 8 * 1024, // defaults to 16 * 1024
      },
  
      zlibInflateOptions: {
        windowBits: 14, // defaults to 15
        memLevel: 7, // defaults to 8
      },
  
      clientNoContextTakeover: true, // defaults to negotiated value.
      serverNoContextTakeover: true, // defaults to negotiated value.
      serverMaxWindowBits: 10, // defaults to negotiated value.
  
      concurrencyLimit: 20, // defaults to 10
    }
})
console.log("yoo")
activeUsers=[]
io.on("connect", (socket) => {
    console.log(`1 ${socket.id}`);
    console.log('test');
    // add new User
    socket.on("new-user-add", (newUserId) => {
        // send all active users to new user
        // io.emit("get-users", activeUsers);
    });
    socket.on("disconnect", () => {
        console.log("User Disconnected", activeUsers);
        // send all active users to all users
        // io.emit("get-users", activeUsers);
    });
    // socket.on("send-message", (data) => {
    //     console.log("data",data);
    //     const { receiverId , message} = data;
    //     console.log("data",data.message);
    //     socket.broadcast.emit("receive-message", data)
    //     console.log(socket.id);
    // });
});
server.listen(3001, () => {
    console.log('Server started - http://localhost:3001');
  })