import React,{useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import axios from "axios"
import { Button, StyleSheet, Text, View } from 'react-native';
import Signup from "./component/Signup"
import LogIn from "./component/LogIn"


export default function App() {
  
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer> 
      <Stack.Navigator>
      <Stack.Screen name="login" component={LogIn}  />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}



