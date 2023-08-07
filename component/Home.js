import React, {useState, useEffect} from 'react';
import axios from "axios";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList,Button, TextInput } from 'react-native';
import Modal from "react-native-modal";

function Home() {
 
const [user,setUser]=useState([])
const [post,setPost]=useState([])
const [username,setUsername]=useState('')
const [image,setimage]=useState('')
const [postText,setPostText]=useState('')
const [postImage,setPostImage]=useState('')

const getUser=()=>{
  axios.get("http://192.168.101.11:3000/api/user/user").then((res)=>{
    setUser(res.data)
    console.log(res.data);
  }).catch((err)=>{
    console.log(err);
  }) 
}
const getPost=()=>{
  axios.get("http://192.168.101.11:3000/api/post/get").then((res)=>{
    setPost(res.data)
  }).catch((err)=>{
    console.log(err);
  }) 
}

const updatePost=(id,postText,postImage)=>{
 axios.put(`http://192.168.101.11:3000/api/post/upda/${id}`,{id,
postText:postText,
postImage:postImage}).then((res)=>{

}).catch((err)=>{
  console.log(err)
})
}
const deletePost=(id)=>{
  axios.delete(`http://192.168.101.11:3000/api/post/del/${id}`).then((res)=>{
console.log("hi");
  }).catch((err)=>{
    console.log(err);
  })
}

const handelUpdate=(id)=>{
  
  updatePost(id,postText,postImage)
}
const handleDelete=(id)=>{
  deletePost(id)
}
const  onchange=()=>{(e) => setPostImage(e)}

useEffect(()=>{getUser()},[!user])
useEffect(()=>{getPost()},[!post])
const UserListItem = ({ user }) => {
  // console.log("user",user);
  
  return(
  <View style={styles.userItem}>
   <Image source={{uri: 'https://marketplace.canva.com/EAFPlm92N5o/1/0/800w/canva-colorful-photo-rainbow-facebook-cover-SGUjGgdTpNY.jpg'}} style={styles.avatar} />
    <Text style={styles.statusUserName} ellipsizeMode='tail' numberOfLines={1}>ali</Text>
  </View>
);}
const Add=()=>{

  const [postText,setPostText]=useState('')
const [postImage,setPostImage]=useState('')

  const addPost=(postText,postImage,userid)=>{
    axios.post("http://192.168.101.11:3000/api/post/addpost",{
      postText:postText,
      postImage:postImage,
      userid:userid
    }).then((res)=>{
      console.log("res",res);
    }).catch((err)=>{
      console.log(err);
    })
  }
  const handleAdd=()=>{
    addPost(postText,postImage)
  }
  return (
    <View>
        <TextInput
          defaultValue={post.postText}
          placeholder="text"
          onChangeText={(e) => setPostText(e)}
        />
         <TextInput
          defaultValue={post.postImage}
          placeholder="image"
          onChangeText={(e) => setPostImage(e)}
        />       
          <Button title="Add" onPress={()=>handleAdd()} />
    </View>
  )
}

const PostCard = ({ post ,user}) => {
  console.log("user",user);
  console.log("user",user);
return(
  <View style={styles.postCard}>
    <View style={styles.postHeader}>
      <Image source={{ uri:"https://i.pinimg.com/736x/16/24/e9/1624e9c7b43384ab522aedba5469a060.jpg"}} style={styles.postAvatar} />
      <Text style={styles.postUsername}>ali</Text>
      <Text style={styles.postDate}>{post.date}</Text>
     
      
        <View style={{ flex: 1 }}>
        <TextInput
      
          placeholder="text"
          onChangeText={(e) => setPostText(e)}
        />
         <TextInput
         
          placeholder="email"
          onChangeText={onchange}
        />
          <Button title="update" onPress={(id)=>handelUpdate(post.id)} />
          <TouchableOpacity style={styles.postButton} onPress={(id)=>handleDelete(post.id)}>
        <Text style={styles.postButtonText}>delete</Text>
      </TouchableOpacity>
        </View>
      
    </View>
    <Text style={styles.postDescription}>{post.postText}</Text>
    {post.postImage && (
      <Image source={{ uri: "data:image/jpeg;base64,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" }} style={styles.postImage} />
    )}
    <View style={styles.postFooter}>
      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postButtonText}>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postButtonText}>Comment</Text>
      </TouchableOpacity>
    </View>
  </View>)
}


return (
  <View style={styles.container}>
      <View style={styles.userContainer}>
        {post.map(users => <UserListItem key={users.id} user={user} post={post} />)}
      </View>
   <Add post={post}/>
  
    <FlatList
      data={post}
      contentContainerStyle={styles.postListContainer}
      keyExtractor={posts => posts.id.toString()}
      renderItem={({ item }) => <PostCard post={item} user={user} />}   
      /> 
  </View>

)
};

const styles = StyleSheet.create({
container: {
  paddingTop:60,
  paddingBottom:120,
},
modal: {
  padding: 25,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
backgroundColor:"white"
},
userContainer: {
  flexDirection: 'row',
  padding: 10,
  backgroundColor:'#fff',
  height:100,
},
userItem: {
  marginRight: 10,
  alignItems: 'center',

  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
},
statusUserName:{
  marginTop:5,
  fontSize:12,
  color:'#483D8B',
  width:60,
  textAlign:'center'
},
avatar: {
  width: 50,
  height: 50,
  borderRadius: 25,
},
postListContainer:{
  paddingTop:20,
  paddingHorizontal:15,
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

export default Home