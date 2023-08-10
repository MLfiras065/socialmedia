
import React, { useState, useEffect } from "react";
import { APP_ENV, APP_API_URL } from '@env';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import SessionStorage from "react-native-session-storage";
import axios from "axios";
const AddProd = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState("");
  const [description, setDescription] = useState("");
  const userid = SessionStorage.getItem("userid");
  const [refrech, setRefrech] = useState(false);
  const addProduct = (title, price, images, description, userid) => {
    axios
      .post(`APP_API_URL/prod/add`, {
        title: title,
        price: price,
        images: images,
        description: description,
        userid: userid,
      })
      .then((res) => {
        setRefrech(!refrech);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAdd = () => {
    addProduct(title, price, images, description, userid);
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setImages(result);

    if (!result.canceled) {
      setImages(result.assets[0].uri);
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
        setImages(data.secure_url);
      })
      .catch((err) => {
        Alert.alert("An Error Occured While Uploading");
      });
  };
  return (
    <View>
      <TextInput
        style={styles.inputs}
        placeholder="title"
        onChangeText={(e) => {
          setTitle(e);
        }}
      />

      <TextInput
        style={styles.inputs}
        placeholder="price"
        onChangeText={(e) => {
          setPrice(e);
        }}
      />

<View style={styles.buttonContainer}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {images && (
          <Image
            source={{ uri: images }}
            style={{ width: 200, height: 200 }}
          />
        )}
      </View>

      <TextInput
        style={styles.inputs}
        placeholder="description"
        onChangeText={(e) => {
          setDescription(e);
        }}
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleAdd}>
        <Text>add</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default AddProd;
