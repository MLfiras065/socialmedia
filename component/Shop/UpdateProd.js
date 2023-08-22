import React,{useState} from 'react'
import { APP_API_URL } from '../../privt';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput,Button} from 'react-native';
import SessionStorage from 'react-native-session-storage';
import * as ImagePicker from "expo-image-picker";
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';
function UpdateProd({po}) {
    console.log("po",po);
    const[title,setTitle]=useState('')
    const[price,setPrice]=useState('')
    const[images,setImages]=useState('')
    const[description,setDescription]=useState('')
    const userid = SessionStorage.getItem('userid')
    
    const [modalVisible, setModalVisible] = useState(false);
    const updateProd=(id)=>{
        axios.put(`${APP_API_URL}/prod/put/${id}`,{id,
        title:title,
        price:price,
      images:images,
      description:description
      }).then((res)=>{
        
        }).catch((err)=>{
          console.log(err)
        })
       }
        const handleUpdate = (id) => {
        updateProd(id,title,price,images,description)
        setModalVisible(!modalVisible)
        };
        const pickImage = async () => {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      console.log(postImage,"test");
          setPostImage(result);
      
          if (!result.canceled) {
            setPostImage(result.assets[0].uri);
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
              setPostImage(data.secure_url);
            })
            .catch((err) => {
              Alert.alert("An Error Occured While Uploading");
            });
        };
        const deletePost=(id)=>{
axios.delete(`${APP_API_URL}/prod/del/${id}`).then((res)=>{

}).catch((err)=>{
    console.log(err);
})
        }
        const handleDele=(id)=>{
            deletePost(id)
        }
  return (
    <View style={styles.centeredView}>
   
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Update your post!</Text>
          <TextInput
        
          placeholder='Title'
onChangeText={(e)=>{setTitle(e)}}
/>
          <TextInput
          
          placeholder='description'
onChangeText={(e)=>{setDescription(e)}}
/>
          <TextInput
         
          placeholder='price'
onChangeText={(e)=>{setPrice(e)}}
/>
<Entypo name="images" size={24} color="black"  onPress={pickImage}/>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            
            onPress={()=>handleUpdate(po.id)}>
            <Text style={styles.textStyle}>update</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    <Pressable
      style={[styles.button, styles.buttonOpen]}
      onPress={() => setModalVisible(true)}>
      <Text style={styles.textStyle}>Update</Text>
    </Pressable>
  </View>
  )
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
export default UpdateProd