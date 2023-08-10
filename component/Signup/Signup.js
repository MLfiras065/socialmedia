import React, { useState } from "react";
import axios from "axios";
import {APP_ENV,APP_API_URL} from "../../privt"
// import { storage } from "./config";

import { Button, Image, View, Platform , TextInput, TouchableOpacity,Text} from 'react-native';
 import * as ImagePicker from 'expo-image-picker';
import { AdvancedImage } from 'cloudinary-react-native';
import { CloudinaryImage } from "@cloudinary/url-gen";
import { URLConfig } from "@cloudinary/url-gen";
import { CloudConfig } from "@cloudinary/url-gen";


let cloudConfig = new CloudConfig({ cloudName: 'dzonlv8oi' });
let urlConfig = new URLConfig({ secure: true })
function Signup() {

  const [image, setImage] = useState("");
  const [coverimage, setCoverImage] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState("");
  const [bio, setBio] = useState("");

  const SignUp = (
    image,
    coverimage,
    FirstName,
    LastName,
    username,
    email,
    Password,
    gender,
    DateOfBirth,
    bio
  ) => {
    axios
      .post(`${APP_API_URL}/user/reg`, {
        image: image,
        coverimage: coverimage,
        FirstName: FirstName,
        LastName: LastName,
        username: username,
        email: email,
        Password: Password,
        gender: gender,
        DateOfBirth: DateOfBirth,
        bio: bio,
      })
      .then((res) => {
        alert("signup");
        console.log("sign", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };




  const handleSignup = () => {
    SignUp(
      image,
      coverimage,
      FirstName,
      LastName,
      username,
      email,
      Password,
      gender,
      DateOfBirth,
      bio
    );
  };

    const pickImage = async () => {
  
     let result = await ImagePicker.launchImageLibraryAsync({
       mediaTypes: ImagePicker.MediaTypeOptions.All,
       allowsEditing: true,
       aspect: [4, 3],
       quality: 1,
     });

     console.log(result);

     if (!result.canceled) {
       setImage(result.assets[0].uri);
     }
   };
  const uploadeImage = async () => {
    const resp = await fetch(image.uri)
    const blob = await resp.blob()
    const filename = image.uri.substring(image.uri.lastIndexOf("/") + 1)
    var ref = storage.storage().ref().child(filename).put(blob)
    try {
      await ref
    }
    catch (err) {
      console.log(err);
    }
    alert("upload")
    setImage(null)
  }
  return (
    (
      <View style={styles.container}>
     
       
        <View style={styles.formContainer}>
          <Text style={styles.title}>Sign Up</Text>
          <View style={styles.card}>
            <View style={styles.inputContainer}>
      
              <Text style={styles.label}>firstName</Text>
              <TextInput
                style={styles.input}
                defaultValue={FirstName}
                placeholder="firstName"
                onChangeText={(firstName) => setFirstName(firstName)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>lastName</Text>
              <TextInput
                style={styles.input}
                defaultValue={LastName}
     placeholder="lastname"
      onChangeText={(e) => setLastName(e)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>userName</Text>
              <TextInput
                style={styles.input}
                defaultValue={username}
                     placeholder="username"
                      onChangeText={(e) => setUserName(e)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                placeholderTextColor="#999"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
     type="Password"
    placeholder="password"
      onChangeText={(text) => setPassword(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>gender</Text>
              <TextInput
                style={styles.input}
                defaultValue={gender}
                      placeholder="gender"
                       onChangeText={(e) => setGender(e)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>DateOfBirth</Text>
              <TextInput
                style={styles.input}
                defaultValue={DateOfBirth}
                     placeholder="DateOfbirth"
                     onChangeText={(e) => setDateOfBirth(e)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Bio</Text>
              <TextInput
                style={styles.input}
                defaultValue={bio}
                   placeholder="bio"
                    onChangeText={(e) => setBio(e)}
              />
            </View>
            <TouchableOpacity style={styles.button}
             onPress={() => handleSignup()}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )

  );
}
const styles = {
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 120,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius:60,
    resizeMode: 'contain',
  },

    formContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      color: '#fff',
      marginBottom: 20,
      marginTop: 20,
    },
    card: {
      width: '80%',
      backgroundColor: '#fff',
      borderRadius: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      padding: 20,
      marginBottom: 20,
    },
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      color: '#333',
    },
    input: {
      height: 40,
      borderRadius:6,
      borderWidth: 1,
      borderColor: '#ddd',
      color: '#333',
      paddingLeft:10,
    },
    button: {
      width: '100%',
      height: 40,
      backgroundColor: '#333',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  };

export default Signup;




