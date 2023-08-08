import React,{useState} from 'react'
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput} from 'react-native';
import SessionStorage from 'react-native-session-storage';
import axios from 'axios';
function Deleteprod({po}) {
    console.log("po",po);
  
    
    const [modalVisible, setModalVisible] = useState(false);
   
        const deletePost=(id)=>{
axios.delete(`http://192.168.101.11:3000/api/prod/del/${id}`).then((res)=>{

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
<View>
<View style={styles.centeredView}>
        <View style={styles.modalView}>
<Text style={styles.modalText}>Hello World!</Text>
<Pressable
            style={[styles.button, styles.buttonClose]}
            
            onPress={()=>handleDele(po.id)}>
            <Text style={styles.textStyle}>delete</Text>
          </Pressable>
</View>
</View>
      </View>
        </Modal>
        <Pressable
      style={[styles.button, styles.buttonOpen]}
      onPress={() => setModalVisible(true)}>
      <Text style={styles.textStyle}>delete</Text>
    </Pressable>
  </View>
  )
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
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
export default Deleteprod