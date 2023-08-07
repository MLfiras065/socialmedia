import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Button
} from 'react-native'
import SessionStorage from 'react-native-session-storage';



function LogIn({ navigation }) {

  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  
 
  
  
  const logIn = (email, Password) => {
    axios
      .post("http://192.168.101.11:3000/api/user/log", {
        email: email,
        Password: Password,

      })
      .then((res) => {
        alert("login");
        SessionStorage.setItem("email", email)
      
      console.log("storage",SessionStorage);
      })
      .catch((err) => {
        console.log(err);
        
      });
  };
  const handleLogIn = () => {
    logIn(email, Password);
  };

  const onPress = () => navigation.navigate("signup", { screen: "Signup" });
  const onPressprofile = () => navigation.navigate("profile", { screen: "Main" });
  const onPresshome = () => navigation.navigate("home", { screen: "Home" });
 
  return (
    <View style={styles.container}>
    <View style={styles.inputContainer}>
      <Image
        style={styles.inputIcon}
        source={{ uri: 'https://img.icons8.com/ios-filled/512/circled-envelope.png' }}
      />
      <TextInput
        style={styles.inputs}
        placeholder="Email"
        keyboardType="email-address"
        underlineColorAndroid="transparent"
        onChangeText={(e)=>{setEmail(e)}}
      />
    </View>

    <View style={styles.inputContainer}>
      <Image
        style={styles.inputIcon}
        source={{ uri: 'https://img.icons8.com/ios-glyphs/512/key.png' }}
      />
      <TextInput
        style={styles.inputs}
        placeholder="Password"
        secureTextEntry={true}
        underlineColorAndroid="transparent"
        onChangeText={ (e)=> setPassword(e)}
      />
    </View>

    <TouchableOpacity
      style={[styles.buttonContainer, styles.loginButton]}
      onPress={handleLogIn}>
      <Text style={styles.loginText}>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => showAlert('forgot password')}>
      <Text>Forgot your password?</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}>
      <Text>Sign up</Text>
    </TouchableOpacity>
    
        <Button title="profile" onPress={onPressprofile} />
        <Button title="home" onPress={onPresshome} />
  </View>
        
        

    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#00b5ec',
  },
  loginText: {
    color: 'white',
  },
})
export default LogIn;
