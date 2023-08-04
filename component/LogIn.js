import React, { useEffect, useState } from "react";
import axios from "axios";


import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

function LogIn({ navigation }) {
  // const [item, setItem] = useState([]);
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  // const url = "http://192.168.101.11:3000/api/user/user";
  
  const logIn = (email, Password) => {
    axios
      .post("http://192.168.101.11:3000/api/user/log", {
        email: email,
        Password: Password,
      })
      .then((res) => {
        alert("login");
      })
      .catch((err) => {
        console.log(err);
        
      });
  };
  const handleLogIn = () => {
    logIn(email, Password);
  };
  // const get = async () => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       setItem(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };
  const onPress = () => navigation.navigate("signup", { screen: "Signup" });
  // useEffect(() => {
  //   get();
  // }, []);
  return (
    <View>
      <View>
        {/* {item.map((items) => (
          <Text key={items.id}>{items.FirstName}</Text>
        ))} */}
        <TextInput
          defaultValue={email}
          placeholder="email"
          onChangeText={(e) => setEmail(e)}
        />
        <TextInput
          secureTextEntry={true}
          defaultValue={Password}
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="login" onPress={() => handleLogIn()} />
        <Button title="SIGNUP" onPress={onPress} />
        
      </View>
    </View>
  );
}

export default LogIn;
