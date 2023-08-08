import React, { useState ,useEffect} from 'react';
import { StyleSheet, View, Text, TextInput,Image,Modal, TouchableOpacity,ScrollView } from 'react-native';
import SessionStorage from 'react-native-session-storage';
import axios from 'axios';
const AddProd = () => {
const[title,setTitle]=useState('')
const[price,setPrice]=useState('')
const[images,setImages]=useState('')
const[description,setDescription]=useState('')
const userid = SessionStorage.getItem('userid')
const[refrech,setRefrech]=useState(false)
const addProduct=(title,price,images,description,userid)=>{
    axios.post('http://192.168.101.11:3000/api/prod/add',{   
        title:title,
        price:price,
        images:images,
        description:description,
        userid:userid
    }).then((res)=>{
            setRefrech(!refrech)
        }).catch((err)=>{
            console.log(err)
        })
 }
 const handleAdd=()=>{
    addProduct(title,price,images,description,userid)
 }
 return (
  
    <View >
    
        <TextInput
         style={styles.inputs}
        placeholder='title'
        onChangeText={(e)=>{setTitle(e)}}
        />
      
        
        <TextInput
         style={styles.inputs}
        placeholder='price'
onChangeText={(e)=>{setPrice(e)}}
        />
       
        
        <TextInput
         style={styles.inputs}
        placeholder='images'
onChangeText={(e)=>{setImages(e)}}
/>


        <TextInput
         style={styles.inputs}
        placeholder='description'
        onChangeText={(e)=>{setDescription(e)}}
        />
        
   <TouchableOpacity 
    style={styles.buttonContainer}
   onPress={handleAdd}>
        <Text >add</Text>
      </TouchableOpacity>
    </View>
  
 )
}
const styles = StyleSheet.create({
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
      },
      inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
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
      }})
export default AddProd