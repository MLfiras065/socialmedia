import React, { useState, useEffect } from "react";
import axios from "axios";
import {APP_ENV,APP_API_URL} from "../../privt"
import * as ImagePicker from "expo-image-picker";
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

function AddPost({ post }) {
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState("");
  const usersid = SessionStorage.getItem("usersid");
 console.log("userid",usersid);
  const addPost = (postText,postImage) => {
    axios
      .post(`${APP_API_URL}/post/addpost/${usersid}`, {
        postText:postText,
        postImage:postImage,
      })
      .then((res) => {
        console.log("res", res);
        console.log("eyyyy");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAdd = () => {
    addPost(postText,postImage);
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
console.log(postImage,"test");
    setPostImage(result);

    if (!result.canceled) {
      setPostImage(result.assets[0].uri);
    }
  };
  const cloudinaryUpload = (photo) => {
    const data = new FormData();
    data.append("file", photo);
    data.append("upload_preset", "ogcodes");
    data.append("cloud_name", "ogcodes");
    fetch("https://api.cloudinary.com/v1_1/dzonlv8oi/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPostImage(data.secure_url);
      })
      .catch((err) => {
        Alert.alert("An Error Occured While Uploading");
      });
  };
  return (
    <View>
      <TextInput
        defaultValue={post.postText}
        placeholder="text"
        onChangeText={(e) => setPostText(e)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {postImage && (
          <Image
            source={{ uri: post.postImage }}
            style={{ width: 200, height: 200 }}
          />
        )}
      </View>

      <TextInput placeholder="image" onChangeText={(e) => setPostImage(e)} />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleAdd}>
        <Text>add</Text>
      </TouchableOpacity>
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
export default AddPost;
