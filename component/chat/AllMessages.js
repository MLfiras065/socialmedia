// import React, { useEffect, useState } from "react";
// import {APP_API_URL} from "../../privt"
// import axios from "axios";
// import {
//     StyleSheet,
//     TextInput,
//     View,
//     Text,
//     Image,
//     TouchableOpacity,
//     FlatList
//   } from "react-native";
//   import {io}  from 'socket.io-client';
// let socket = io("http://localhost:8080", { transports: ["websocket"] })
// console.log("socket",socket);
// socket.emit("msg",)
// const conn=()=>{
//   socket.emit('connection')
//   console.log("connctrd");
// }
// // const sendMessage = (msg) => {
// //   socket.emit("connection")
// //  console.log("test");
      
// // }
// // conn()
// // sendMessage("hello")
// export const initiateSocket = () => {
//   console.log(`Connecting socket...`);
  
//   io('http://192.168.104.7:3000').emit('connected',()=>{
//     console.log('connnected front');
//   })
// }

// export const disconnectSocket = () => {
//   console.log('Disconnecting socket...');
//   if(socket) socket.disconnect();
// }
// export const subscribeToChat = (cb) => {
//   if (!socket) return(true);
//   socket.on('chat', msg => {
//     console.log('Websocket event received!');
//     return cb(null, msg);
//   });
// }
// export const sendMessage = (room, message) => {
//   if (socket) socket.emit('chat', { message, room });
// }

// // const userId = 'user1'
// // socket.emit('login', userId);

// // // Listen for private messages
// // socket.on('private message', ({ fromUserId, message }) => {
// //   console.log(`Received private message from ${fromUserId}: ${message}`);
// // });

// // // Send private message to user 2
// // const toUserId = 'user2'; // Change this to the user ID of user 2
// // socket.emit('private message', { toUserId, message: 'Hello, user 2!' });

// const sendMess=(content,senderId,receiverId)=>{
//   axios.post(`${APP_API_URL}`,{
//     senderId: userId,
//     receiverId:toUserId

//   })
// }
// const AllMessages=()=>{
//     const data = [
//         { id: 1, date: '9:50 am', type: 'in', message: 'Lorem ipsum dolor sit amet' },
//         { id: 2, date: '9:50 am', type: 'out', message: 'Lorem ipsum dolor sit amet' },
//         { id: 3, date: '9:50 am', type: 'in', message: 'Lorem ipsum dolor sit a met' },
//         { id: 4, date: '9:50 am', type: 'in', message: 'Lorem ipsum dolor sit a met' },
//         { id: 5, date: '9:50 am', type: 'out', message: 'Lorem ipsum dolor sit a met' },
//         { id: 6, date: '9:50 am', type: 'out', message: 'Lorem ipsum dolor sit a met' },
//         { id: 7, date: '9:50 am', type: 'in', message: 'Lorem ipsum dolor sit a met' },
//         { id: 8, date: '9:50 am', type: 'in', message: 'Lorem ipsum dolor sit a met' },
//         { id: 9, date: '9:50 am', type: 'in', message: 'Lorem ipsum dolor sit a met' },
//       ]
//     const [message,setMessage]=useState([])
//       const [messages, setMessages] = useState(data)
//       const [newMsg, setNewMsg] = useState()
    
//       const renderDate = date => {
//         return <Text style={styles.time}>{date}</Text>
//       }
     
//       useEffect(() => {
//        initiateSocket();
//         subscribeToChat((err, data) => {
//           if(err) return;

//         });
//         return () => {
//           disconnectSocket();
//         }
//       }, []);
//     return (
//         <View style={styles.container}>
//           <FlatList
//             style={styles.list}
//             data={messages}
//             keyExtractor={item => {
//               return item.id
//             }}
//             renderItem={message => {
//               const item = message.item
//               let inMessage = item.type === 'in'
//               let itemStyle = inMessage ? styles.itemIn : styles.itemOut
//               return (
//                 <View style={[styles.item, itemStyle]}>
//                   {!inMessage && renderDate(item.date)}
//                   <View style={[styles.balloon]}>
//                     <Text>{item.message}</Text>
//                   </View>
//                   {inMessage && renderDate(item.date)}
//                 </View>
//               )
//             }}
//           />
//           <View style={styles.footer}>
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={styles.inputs}
//                 placeholder="Write a message..."
//                 underlineColorAndroid="transparent"
//                 onChangeText={msg => setMessage({ msg })}
//               />
//             </View>
    
//             <TouchableOpacity 
//             onPress={()=>console.log("test")}
//             style={styles.btnSend}>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/small/75/ffffff/filled-sent.png' }}
//                 style={styles.iconSend}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//       )
//     }
    
//     const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//       },
//       list: {
//         paddingHorizontal: 17,
//       },
//       footer: {
//         flexDirection: 'row',
//         height: 60,
//         backgroundColor: '#eeeeee',
//         paddingHorizontal: 10,
//         padding: 5,
//       },
//       btnSend: {
//         backgroundColor: '#00BFFF',
//         width: 40,
//         height: 40,
//         borderRadius: 360,
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//       iconSend: {
//         width: 30,
//         height: 30,
//         alignSelf: 'center',
//       },
//       inputContainer: {
//         borderBottomColor: '#F5FCFF',
//         backgroundColor: '#FFFFFF',
//         borderRadius: 30,
//         borderBottomWidth: 1,
//         height: 40,
//         flexDirection: 'row',
//         alignItems: 'center',
//         flex: 1,
//         marginRight: 10,
//       },
//       inputs: {
//         height: 40,
//         marginLeft: 16,
//         borderBottomColor: '#FFFFFF',
//         flex: 1,
//       },
//       balloon: {
//         maxWidth: 250,
//         padding: 15,
//         borderRadius: 20,
//       },
//       itemIn: {
//         alignSelf: 'flex-start',
//       },
//       itemOut: {
//         alignSelf: 'flex-end',
//       },
//       time: {
//         alignSelf: 'flex-end',
//         margin: 15,
//         fontSize: 12,
//         color: '#808080',
//       },
//       item: {
//         marginVertical: 14,
//         flex: 1,
//         flexDirection: 'row',
//         backgroundColor: '#E0FFFF',
//         borderRadius: 300,
//         padding: 5,
//       },
//     })


// export default AllMessages
import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text, Pressable, SafeAreaView, FlatList ,StyleSheet} from "react-native";
import ChatComponent from "./ChatComponent";
const Chat = () => {

  //👇🏻 Dummy list of rooms
  const rooms = [
      {
          id: "1",
          name: "Novu Hangouts",
          messages: [
              {
                  id: "1a",
                  text: "Hello guys, welcome!",
                  time: "07:50",
                  user: "Tomer",
              },
              {
                  id: "1b",
                  text: "Hi Tomer, thank you! 😇",
                  time: "08:50",
                  user: "David",
              },
          ],
      },
      {
          id: "2",
          name: "Hacksquad Team 1",
          messages: [
              {
                  id: "2a",
                  text: "Guys, who's awake? 🙏🏽",
                  time: "12:50",
                  user: "Team Leader",
              },
              {
                  id: "2b",
                  text: "What's up? 🧑🏻‍💻",
                  time: "03:50",
                  user: "Victoria",
              },
          ],
      },
  ];

  return (
      <SafeAreaView style={styles.chatscreen}>
          <View style={styles.chattopContainer}>
              <View style={styles.chatheader}>
                  <Text style={styles.chatheading}>Chats</Text>

          {/* 👇🏻 Logs "ButtonPressed" to the console when the icon is clicked */}
                  <Pressable onPress={() => console.log("Button Pressed!")}>
                      <Feather name='edit' size={24} color='green' />
                  </Pressable>
              </View>
          </View>

          <View style={styles.chatlistContainer}>
              {rooms.length > 0 ? (
                  <FlatList
                      data={rooms}
                      renderItem={({ item }) => <ChatComponent item={item} />}
                      keyExtractor={(item) => item.id}
                  />
              ) : (
                  <View style={styles.chatemptyContainer}>
                      <Text style={styles.chatemptyText}>No rooms created!</Text>
                      <Text>Click the icon above to create a Chat room</Text>
                  </View>
              )}
          </View>
      </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  loginscreen: {
      flex: 1,
      backgroundColor: "#EEF1FF",
      alignItems: "center",
      justifyContent: "center",
      padding: 12,
      width: "100%",
  },
  loginheading: {
      fontSize: 26,
      marginBottom: 10,
  },
  logininputContainer: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
  },
  logininput: {
      borderWidth: 1,
      width: "90%",
      padding: 8,
      borderRadius: 2,
  },
  loginbutton: {
      backgroundColor: "green",
      padding: 12,
      marginVertical: 10,
      width: "60%",
      borderRadius: "50%",
      elevation: 1,
  },
  loginbuttonText: {
      textAlign: "center",
      color: "#fff",
      fontWeight: "600",
  },
  chatscreen: {
      backgroundColor: "#F7F7F7",
      flex: 1,
      padding: 10,
      position: "relative",
  },
  chatheading: {
      fontSize: 24,
      fontWeight: "bold",
      color: "green",
  },
  chattopContainer: {
      backgroundColor: "#F7F7F7",
      height: 70,
      width: "100%",
      padding: 20,
      justifyContent: "center",
      marginBottom: 15,
      elevation: 2,
  },
  chatheader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
  },
  chatlistContainer: {
      paddingHorizontal: 10,
  },
  chatemptyContainer: {
      width: "100%",
      height: "80%",
      alignItems: "center",
      justifyContent: "center",
  },
  chatemptyText: { fontWeight: "bold", fontSize: 24, paddingBottom: 30 },
  messagingscreen: {
      flex: 1,
  },
  messaginginputContainer: {
      width: "100%",
      minHeight: 100,
      backgroundColor: "white",
      paddingVertical: 30,
      paddingHorizontal: 15,
      justifyContent: "center",
      flexDirection: "row",
  },
  messaginginput: {
      borderWidth: 1,
      padding: 15,
      flex: 1,
      marginRight: 10,
      borderRadius: 20,
  },
  messagingbuttonContainer: {
      width: "30%",
      backgroundColor: "green",
      borderRadius: 3,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
  },
  modalbutton: {
      width: "40%",
      height: 45,
      backgroundColor: "green",
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
  },
  modalbuttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
  },
  modaltext: {
      color: "#fff",
  },
  modalContainer: {
      width: "100%",
      borderTopColor: "#ddd",
      borderTopWidth: 1,
      elevation: 1,
      height: 400,
      backgroundColor: "#fff",
      position: "absolute",
      bottom: 0,
      zIndex: 10,
      paddingVertical: 50,
      paddingHorizontal: 20,
  },
  modalinput: {
      borderWidth: 2,
      padding: 15,
  },
  modalsubheading: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 15,
      textAlign: "center",
  },
  mmessageWrapper: {
      width: "100%",
      alignItems: "flex-start",
      marginBottom: 15,
  },
  mmessage: {
      maxWidth: "50%",
      backgroundColor: "#f5ccc2",
      padding: 15,
      borderRadius: 10,
      marginBottom: 2,
  },
  mvatar: {
      marginRight: 5,
  },
  cchat: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 5,
      paddingHorizontal: 15,
      backgroundColor: "#fff",
      height: 80,
      marginBottom: 10,
  },
  cavatar: {
      marginRight: 15,
  },
  cusername: {
      fontSize: 18,
      marginBottom: 5,
      fontWeight: "bold",
  },
  cmessage: {
      fontSize: 14,
      opacity: 0.7,
  },
  crightContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      flex: 1,
  },
  ctime: {
      opacity: 0.5,
  },
});
export default Chat