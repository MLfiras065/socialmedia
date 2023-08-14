import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity,Button ,FlatList,StyleSheet} from 'react-native';
import axios from "axios";
import SessionStorage from 'react-native-session-storage';
import Main from "./Main";
function Users({navigation,route}) {

const {paramKey}=route.params
console.log("useremail",paramKey);
const [post,setPost]=useState([])
const [postText,setPostText]=useState('')
const [postImage,setPostImage]=useState('')
console.log("postuser",post);
const get =async()=>{
  const userid = SessionStorage.getItem('userid')
const posts=await axios.get(`${APP_API_URL}/post/get/${userid}`)
try {
    console.log("posts",posts.data);
 setPost(posts.data)   
 setPostText(posts.data.postText)
 setPostImage(posts.data.postImage)
} catch (err) {
    console.log("users",err);
}
}

useEffect(()=>{
get()
},[])


  return (
   <ScrollView>
    {post.map((e)=>{
      return(
    <View>
      <Text style={styles.postDescription}>{e.postText}</Text>
<Image source={{uri: 'https://marketplace.canva.com/EAFPlm92N5o/1/0/800w/canva-colorful-photo-rainbow-facebook-cover-SGUjGgdTpNY.jpg'}} style={styles.postImage}/>
</View>
)})
 } 

   </ScrollView>
)}
  
  
const styles = StyleSheet.create({
  container: {
    paddingTop:60,
    paddingBottom:120,
  },
 



  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  postCard: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius:5,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  postAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  postUsername: {
    flex: 1,
  },
  postDate: {
    fontSize: 12,
    color:'#A9A9A9',
  },
  postDescription:{
    fontSize:16,
    color:'#00008B'
  },
  postImage: {
    marginTop: 10,
    width: '100%',
    height: 200,
  },
  postFooter: {
    flexDirection: 'row',
    marginTop: 10,
  },
  postButton: {
    marginRight: 10,
  },
  postButtonText:{
    color:'#808080'
  }
  });
export default Users