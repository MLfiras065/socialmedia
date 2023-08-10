import React,{useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import Signup from "./component/Signup/Signup"
import LogIn from "./component/Signup/LogIn"
import Main from './component/Profile/Main';
import Users from './component/Profile/Users';
import Home from './component/Home/Home';
import Shop from './component/Shop/Shop';
import PostCard from './component/Home/PostCard';


export default function App() {
  
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer> 
      <Stack.Navigator>
      <Stack.Screen name="login" component={LogIn}  />
      <Stack.Screen name="profile" component={Main}   />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="shop" component={Shop} />
      <Stack.Screen name="postcard" component={PostCard} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}



