import React, { useState, useEffect } from "react";
import { APP_ENV, APP_API_URL } from '../../privt'
import axios from "axios";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
} from "react-native";
import AddPost from "./AddPost";
import PostCard from "./PostCard";
import Navbar from "../Navbar";
const Home=({navigation}) =>{
  
  const [post, setPost] = useState([]);
  
  const getPost = () => {
    axios
      .get(`${APP_API_URL}/post/get`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  useEffect(() => {
    getPost();
  }, []);

  const UserListItem = ({ post }) => {
    return (
      <View style={styles.userItem}>
        <Image
          source={{
            uri:post.postImage,
          }}
          style={styles.avatar}
        />
        <Text
          style={styles.statusUserName}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {post.username}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        {post.map((users) => (
          <UserListItem key={users.id} post={users} />
        ))}
      </View>
      <AddPost post={post} />

      <FlatList
        data={post}
        contentContainerStyle={styles.postListContainer}
        keyExtractor={(posts) => posts.id.toString()}
        renderItem={({ item }) => <PostCard post={item}  navigation={navigation}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 120,
  },
  modal: {
    padding: 25,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  userContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    height: 100,
  },
  userItem: {
    marginRight: 10,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  statusUserName: {
    marginTop: 5,
    fontSize: 12,
    color: "#483D8B",
    width: 60,
    textAlign: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  postListContainer: {
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  postCard: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
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
    color: "#A9A9A9",
  },
  postDescription: {
    fontSize: 16,
    color: "#00008B",
  },
  postImage: {
    marginTop: 10,
    width: "100%",
    height: 200,
  },
  postFooter: {
    flexDirection: "row",
    marginTop: 10,
  },
  postButton: {
    marginRight: 10,
  },
  postButtonText: {
    color: "#808080",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
});

export default Home;
