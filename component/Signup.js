import React, { useState } from "react";
import axios from "axios";
import { Button, StyleSheet, Text, View, TextInput,TouchableOpacity } from "react-native";
// import  showImagePicker from 'react-native-image-picker'
import { storage } from "./config";
import  {launchImageLibrary,showImagePicker,MediatypeOptions }from 'react-native-image-picker'
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
      .post("http://192.168.101.11:3000/api/user/reg", {
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
        console.log("sign",res.data);
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

 const pickImage = async()=>{
let res= await launchImageLibrary({
  mediatypes:MediatypeOptions.All,
  allowsEditing:true,
  aspect:[4,3],
  quality:1,
})
const source={uri:res.uri}
console.log("src",source);
setImage(source)
 }
 const uploadeImage=async()=>{
  const resp= await fetch(image.uri)
  const blob =await resp.blob()
  const filename=image .uri.substring(image.uri.lastIndexOf("/")+1)
  var ref= storage.storage().ref().child(filename).put(blob)
  try {
    await ref
  } catch (err) {
    console.log(err);
  }
  alert("upload")
  setImage(null)
 }
  return (
    <View>
      <TextInput
        //  style={styles.input}
        defaultValue={image}
        placeholder="image"
        onChangeText={(image) => setImage(image)}
      />
       <TouchableOpacity onPress={()=>pickImage()} >
          <Text >Upload</Text>
        {image&& <Image source ={{uri:image.uri}}/>}
        </TouchableOpacity>
        <TouchableOpacity onPress={uploadeImage}>

        </TouchableOpacity>
      <TextInput
        //  style={styles.input}
        defaultValue={coverimage}
        placeholder="coverImage"
        onChangeText={(coverImage) => setCoverImage(coverImage)}
      />
      <TextInput
        //  style={styles.input}
        defaultValue={FirstName}
        placeholder="firstName"
        onChangeText={(firstName) => setFirstName(firstName)}
      />
      <TextInput
        //  style={styles.input}
        defaultValue={LastName}
        placeholder="lastname"
        onChangeText={(e) => setLastName(e)}
      />
      <TextInput
        //  style={styles.input}
        defaultValue={username}
        placeholder="username"
        onChangeText={(e) => setUserName(e)}
      />
      <TextInput
        //  style={styles.input}
        defaultValue={email}
        placeholder="email"
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        //  style={styles.input}
        secureTextEntry={true}
        type="Password"
        placeholder="password"
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        //  style={styles.input}
        defaultValue={gender}
        placeholder="gender"
        onChangeText={(e) => setGender(e)}
      />
      <TextInput
        //  style={styles.input}
        defaultValue={DateOfBirth}
        placeholder="DateOfbirth"
        onChangeText={(e) => setDateOfBirth(e)}
      />
      <TextInput
        //  style={styles.input}
        defaultValue={bio}
        placeholder="bio"
        onChangeText={(e) => setBio(e)}
      />
      <Button title="Signin" onPress={() => handleSignup()} />
    </View>
  );
}

export default Signup;
