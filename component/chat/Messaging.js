import React, { useState,useEffect } from "react";
import { View, TextInput, Text, FlatList, Pressable,StyleSheet,TouchableOpacity,Image} from "react-native";
import axios from "axios";
import { APP_API_URL } from '../../privt';
import SessionStorage from "react-native-session-storage";
import MessageComponent from "./MessageComponent";
import {io} from 'socket.io-client';


const Messaging = ({ route,item }) => {
  const userid=JSON.stringify(SessionStorage.getItem('usersid'))
  const param=route.params.userid
  console.log("param",param);
  const [content,setContent]=useState('')
  const [socket,setSocket]=useState()
  const [chatMessages, setChatMessages] = useState([]);
  console.log("testttt",content);
  
  const getMessage=()=> {
    
      axios.get(`${APP_API_URL}/message/getm/${userid}/${param}`).then((res)=>{
          setChatMessages(res.data)
          console.log("res=>",res.data);
      }).catch((err)=>{console.log(err)
      })
  }

  const addsMessage=(content)=>{
      console.log(socket,"socket");
      socket.emit("send-message", content)
      let x=socket.emit('send-message',content)
      console.log("x=>",x);
axios.post(`${APP_API_URL}/message/postMsg/${userid}/${param}`,{
  content:content,
  })
  .then((res)=>{
      setChatMessages(res.data)

  })
.catch((err)=>{
  console.log(err);
})
  }
  const handleAdd=()=>{
      addsMessage(content)
  }

  const handleNewMessage = () => {
      const hour =
          new Date().getHours() < 10
              ? `0${new Date().getHours()}`
              : `${new Date().getHours()}`;

      const mins =
          new Date().getMinutes() < 10
              ? `0${new Date().getMinutes()}`
              : `${new Date().getMinutes()}`;

      console.log({
          message,
      
          timestamp: { hour, mins },
      });
  };


  useEffect(() => {
    
    const socketConnection = io("http://192.168.104.7:4000");
    
    socketConnection.on("connect", () => {
      console.log("Socket connected.");
      setSocket(socketConnection); 
    });

 
    return () => {
      if (socketConnection) {
        socketConnection.disconnect();
      }
    }

  }, []); 

  useEffect(() => {
    
      getMessage();
    
  }, [])
  console.log("chatmessa",chatMessages)
  return (
      <View style={styles.messagingscreen}>
          <View
              style={[
                  styles.messagingscreen,
                  { paddingVertical: 15, paddingHorizontal: 10 ,color:'black'},
              ]}
          >
              {chatMessages ? (
                  <FlatList
                      data={chatMessages}
                      renderItem={({ item }) => (
                          <MessageComponent item={item}  />
                      )}
                      keyExtractor={(item) => item.id}
                  />
              ) : (
                  ""
              )}
          </View>

          <View style={styles.messaginginputContainer}>
              <TextInput
                      value={content}
                  style={styles.messaginginput}
                  onChangeText={(value) => setContent(value)}
              />
              <Pressable
              
                  style={styles.messagingbuttonContainer}
                  onPress={()=>handleAdd()}
              >
                  <View>
                      <Text style={{ color: "#f2f0f1", fontSize: 20 }}>SEND</Text>
                  </View>
              </Pressable>
          </View>
      </View>
  );
};
const styles = StyleSheet.create({

  chatscreen: {
      backgroundColor: "#F7F7F7",
      flex: 1,
      padding: 10,
      position: "relative",
      color:"black"
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
      color:"black"
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
      color:"black"
  },
  messaginginput: {
      borderWidth: 1,
      padding: 15,
      flex: 1,
      marginRight: 10,
      borderRadius: 20,
      color:'black'
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
      color: "black",
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
      color:"black"
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
      color:"black"
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
      color:"black"
  },
  crightContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      flex: 1,
      color:"black"
  },
  ctime: {
      opacity: 0.5,
  },
});

export default Messaging;