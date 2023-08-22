import React, { useState, useEffect } from "react";
import axios from "axios";
import {APP_API_URL} from "../../privt"
import * as ImagePicker from "expo-image-picker";
import { Entypo } from '@expo/vector-icons';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  
} from "react-native";
import SessionStorage from "react-native-session-storage";

function AddComment({comm,route,paramk}) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const param=paramk
  const usersid = SessionStorage.getItem("usersid");
 console.log("userid",usersid);

  const addComm = (content,image) => {
    axios
      .post(`${APP_API_URL}/comm/add/${usersid}/${param}`, {
        content:content,
        image:image,
      })
      .then((res) => {
        console.log("res", res.data);
        console.log("added");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAdd = () => {
    addComm(content,image);
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setImage(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
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
        setImage(data.secure_url);
      })
      .catch((err) => {
        Alert.alert("An Error Occured While Uploading");
      });
  };
  return (
    <View>
     <View style={styles.footer}>
   
        <View>
        <TouchableOpacity 
        onPress={pickImage}
        style={styles.btnSend}>
              <Image
                source={{ uri: comm.image }}
                style={styles.iconSend}
              />
            </TouchableOpacity>
        </View>
            <View style={styles.inputContainer}>
              <TextInput
              value={comm.content}
                style={styles.inputs}
                placeholder="Write a comment..."
                underlineColorAndroid="transparent"
                onChangeText={content => setContent(content)}
              />
            </View>
    
            <TouchableOpacity 
            onPress={()=>{handleAdd()}}
            style={styles.btnSend}>
              <Image
                source={{ uri: 'https://img.icons8.com/small/75/ffffff/filled-sent.png' }}
                style={styles.iconSend}
                
              />
            </TouchableOpacity>
            
          </View>
    </View>
  );
}
const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#eeeeee',
        paddingHorizontal: 10,
        padding: 5,
      },
      btnSend: {
        backgroundColor: '#00BFFF',
        width: 40,
        height: 40,
        borderRadius: 360,
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 10,
      },
      iconSend: {
        width: 30,
        height: 30,
        alignSelf: 'center',
      },
  container: {
    paddingTop: 60,
    paddingBottom: 120,
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
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
export default AddComment;
