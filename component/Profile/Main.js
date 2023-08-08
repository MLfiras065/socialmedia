import React, { useEffect, useState } from "react";
 import axios from "axios";
 import SessionStorage from 'react-native-session-storage';
import { View, Text, Image, ScrollView, TouchableOpacity,Button } from 'react-native';
function Main({navigation,route}) {
  // const {emails}=route.params
     const [item, setItem] = useState([]);
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
   const url = "http://192.168.101.11:3000/api/user/user";
   const useremail = SessionStorage.getItem('email')
  const get = async (email) => {
    console.log("datasto",useremail);
    axios
      .get(`http://192.168.101.11:3000/api/user/${useremail}`)
      .then((res) => {
        setItem(res.data);
        setUserName(res.data.username)
        setBio(res.data.bio)
        setImage(res.data.image)
        setCoverImage(res.data.coverimage)
        setEmail(res.data.email)
        SessionStorage.setItem("userid",res.data.id)
        console.log(res.data);

      })
      .catch((err) => console.log(err));
  };
    const updateUser=(  id,image,
        coverimage,
        FirstName,
        LastName,
        username,
        email,
        Password,
        gender,
        DateOfBirth,
        bio)=>{
        axios.put(`http://192.168.101.11:3000/api/user/pd/${id}`, {image: image,
        coverimage: coverimage,
        FirstName: FirstName,
        LastName: LastName,
        username: username,
        email: email,
        Password: Password,
        gender: gender,
        DateOfBirth: DateOfBirth,
        bio: bio}).then((res)=>{

        }).catch((err)=>{
            console.log(err);
        })
    }
    const handleUpdate=(id)=>{
updateUser( id,image,
    coverimage,
    FirstName,
    LastName,
    username,
    email,
    Password,
    gender,
    DateOfBirth,
    bio)
    }
    const handleLogout=()=>{
      SessionStorage.removeItem('useremail')
      
    }
     useEffect(() => {
    
      get();

  }, []);
  return (
    <ScrollView style={styles.container}>
      
        <View style={styles.headerContainer}>
        
        <Image
          style={styles.coverPhoto}
          source={{uri: 'https://marketplace.canva.com/EAFPlm92N5o/1/0/800w/canva-colorful-photo-rainbow-facebook-cover-SGUjGgdTpNY.jpg'}}
        />
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePhoto}
            source={{uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}}
          />
          <Text style={styles.nameText}
          >Username:{username}</Text>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
        Bio:{bio}
        </Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>{item.length}</Text>
          <Text style={styles.statLabel}>Posts</Text>
          <Button
          title=" posts"
          
          onPress={() =>
            navigation.navigate('Users', {
              paramKey:useremail,
            })
          }
        />
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>5678</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>9101</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
   <Button title="logout" onPress={()=>handleLogout()}/>
    </ScrollView>
  )
}

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    headerContainer: {
      alignItems: 'center',
    },
    coverPhoto: {
      width: '100%',
      height: 200,
    },
    profileContainer: {
      alignItems: 'center',
      marginTop: -50,
    },
    profilePhoto: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    nameText: {
        color:"black",
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
    },
    bioContainer: {
      padding: 15,
    },
    bioText: {
        color:"black",
      fontSize: 16,
    },
    statsContainer: {
      flexDirection: 'row',
      marginTop: 20,
      marginBottom: 20,
    },
    statContainer: {
      alignItems: 'center',
      flex: 1,
    },
    statCount: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    statLabel: {
      fontSize: 16,
      color: '#999',
    },
    button: {
      backgroundColor: '#B0C4DE',
      borderRadius: 5,
      padding: 10,
      marginHorizontal: 20,
    },
    buttonText: {
      fontSize: 16,
      color: '#fff',
      textAlign: 'center',
    },
  };
export default Main