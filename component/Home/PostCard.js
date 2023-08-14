import React, { useState} from "react";
import { APP_API_URL } from '../../privt';
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
import SessionStorage from "react-native-session-storage";



function PostCard({ post, navigation}) {
console.log("posts",post);
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState("");
  const userid = SessionStorage.getItem("userid");

  const updatePost = (id, postText, postImage) => {
    axios
      .put(`${APP_API_URL}/post/upda/${id}`, {
        id,
        postText: postText,
        postImage,
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  const deletePost = (id) => {
    axios
      .delete(`${APP_API_URL}/post/del/${id}`)
      .then((res) => {
        console.log("hi");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelUpdate = (id) => {
    updatePost(id, postText, postImage);
  };
  const handleDelete = (id) => {
    deletePost(id);
  };
  const onchange = () => {
    (e) => setPostImage(e);
  };

  
  return (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
       
    <TouchableOpacity   onPress={() =>
              
              navigation.navigate({name:"profile",

              params:{post:post.User.id}})
            }
            >
        <Image
          source={{
            uri: post.postImage,
          }}
          style={styles.postAvatar}
        />
        </TouchableOpacity>
        <Text style={styles.postUsername}>{post.username}</Text>
        <Text style={styles.postDate}>{post.date}</Text>

        <View style={{ flex: 1 }}>
          <TextInput placeholder="text" onChangeText={(e) => setPostText(e)} />
          <TextInput placeholder="email" onChangeText={onchange} />
          <Button title="update" onPress={() => handelUpdate(post.id)} />
          <TouchableOpacity
            style={styles.postButton}
            onPress={(id) => handleDelete(post.id)}
          >
            <Text style={styles.postButtonText}>delete</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.postDescription}>{post.postText}</Text>
      {post.postImage && (
        <Image
          source={{
            uri: post.postImage
          }}
          style={styles.postImage}
        />
      )}
      <View style={styles.postFooter}>
        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postButtonText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity  
        onPress={() =>
              
          navigation.navigate({name:"commentcard",

          params:{post:post.id}})
        } 
        style={styles.postButton}>
          <Text style={styles.postButtonText}>Comment</Text>
        </TouchableOpacity>
      </View>
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
export default PostCard;
