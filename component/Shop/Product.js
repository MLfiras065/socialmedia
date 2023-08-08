import React, { useState ,useEffect} from 'react';
import { StyleSheet, View, Button,Text, TextInput, FlatList, Image,Modal, TouchableOpacity,ScrollView } from 'react-native';

import SessionStorage from 'react-native-session-storage';
import axios from 'axios';
import UpdateProd from './UpdateProd';
import Deleteprod from './deleteprod';

const RenderItem = ({po}) => {
  const[title,setTitle]=useState('')
  const[price,setPrice]=useState('')
  const[images,setImages]=useState('')
  const[description,setDescription]=useState('')
  const userid = SessionStorage.getItem('userid')
  const[refrech,setRefrech]=useState(false)
 


  
    return(
    
    <View style={styles.card}>
 <UpdateProd po={po}/>
 <Deleteprod po={po}/>
      <Image source={{ uri:"https://source.unsplash.com/900x900/?house"}} style={styles.image} />
      <View style={styles.cardBody}>
        <Text
      
        style={styles.price}>
          testt: {po.title}</Text> 
    <Text 
         style={styles.address}>description:{po.description}</Text>
        <Text 
        style={styles.price}>price:{po.price}   Dt
        </Text>
      </View>
    </View>
    )}
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          paddingTop:60,
        },
        searchInputContainer:{
          paddingHorizontal:20,
        },
        searchInput: {
          height: 40,
          borderWidth: 1,
          borderColor:'#dcdcdc',
          backgroundColor:'#fff',
          borderRadius: 5,
          padding: 10,
          marginBottom: 10
        },
        ShopContainer:{
          paddingHorizontal:20,
        },
        card: {
          backgroundColor: '#fff',
          borderRadius: 5,
          marginTop:10,
          marginBottom: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5
        },
        image: {
          height: 150,
          marginBottom: 10,
          borderTopLeftRadius:5,
          borderTopRightRadius:5,
        },
        cardBody: {
          marginBottom: 10,
          padding: 10,
        },
        price: {
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 5,
          color:"#666"
        },
        address: {
          fontSize: 16,
          marginBottom: 5,
          color:'#666'
        },
        squareMeters: {
          fontSize: 14,
          marginBottom: 5,
          color: '#666'
        },
        cardFooter: {
          padding: 10,
          flexDirection: 'row',
          borderTopWidth:1,
          borderTopColor:'#dcdcdc',
          justifyContent: 'space-between',
        },
        beds: {
          fontSize: 14,
          color:'#ffa500',
          fontWeight: 'bold'
        },
        baths: {
          fontSize: 14,
          color:'#ffa500',
          fontWeight: 'bold'
        },
        parking: {
          fontSize: 14,
          color:'#ffa500',
          fontWeight: 'bold'
        }, container: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
        title: {
          fontSize: 20,
          fontWeight: "bold",
        },
        text: {
          fontSize: 16,
          fontWeight: "400",
          textAlign: "center",
        },
        separator: {
          marginVertical: 30,
          height: 1,
          width: "80%",
        },
        input: {
          paddingTop: 10,
          borderColor: "grey",
          borderBottomWidth: 2,
        },
        button: {
          flexDirection: "row",
          flex: 1,
          justifyContent: "center",
        },
        modal: {
          width: "100%",
          height: "90%",
          alignItems: "center",
          justifyContent: "center",
        },
    })
      
      export default  RenderItem
