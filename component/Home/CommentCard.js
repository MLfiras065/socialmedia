import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {APP_API_URL} from "../../privt"
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import AddComment from './AddComment'

const CommentCard = ({navigation,route}) => {
      const paramkey=route.params.post
      console.log("paramkey",paramkey);
      const [comment,setComment]=useState([])
      const [content, setContent] = useState("");
      const [image, setImage] = useState("");

  const getComm=()=>{
    axios.get(`${APP_API_URL}/comm/${paramkey}`).then((res)=>{
      setComment(res.data)
      setContent(res.data.content)
      setImage(res.data.image)
    
      
    }).catch((err)=>{
        console.log(err);
    })
 }
 useEffect(()=>{getComm()},[comment])
  return (
    <View>
    <FlatList
      style={styles.root}
      data={comment}
    
      ItemSeparatorComponent={() => {
        return <View style={styles.separator} />
      }}
      keyExtractor={item => {
        return item.id
      }}
      renderItem={item => {
      
        return (
          <View style={styles.container}>
            <TouchableOpacity >
              <Image style={styles.image} source={{ uri: item.image }} />
            </TouchableOpacity>
            <View style={styles.content}>
              <View style={styles.contentHeader}>
                <Text style={styles.name}>{item.content}</Text>
                <Text style={styles.time}>9:58 am</Text>
              </View>
              <Text rkType="primary3 mediumLine"></Text>
            </View>
          </View>
        )
      }}
    />
    <AddComment comm={comment} paramk={paramkey} navigation={navigation}/>
</View>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 22,
    marginLeft: 20,
  },
  time: {
    fontSize: 11,
    color: '#808080',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
export default CommentCard