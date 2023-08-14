import React, { useEffect, useState } from "react";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import {APP_API_URL} from "../../privt"
import SessionStorage from 'react-native-session-storage';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
function Main({ navigation, route }) {
  console.log("route",route);
  const paramkey=route.params.post
  console.log("paramkey",paramkey);
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
  const [theFollowedUserid,setTheFollowedUserid]=useState('')
  const [theFollowingUserid,setTheFollowingUserid]=useState('')
  const url = ` ${APP_API_URL}/user/user`;
  const emailuser = SessionStorage.getItem("email");
  const userid = SessionStorage.getItem("userid");
  console.log("datasto", userid);

 
  console.log("sessionstorage",SessionStorage);
  const get = async () => {
    axios
    .get(`http://192.168.104.3:3000/api/user/${emailuser}`)
    .then((res) => {

        setItem(res.data);
        setUserName(res.data.username);
        setBio(res.data.bio);
        setImage(res.data.image);
        setCoverImage(res.data.coverimage);
        setEmail(res.data.email);
        SessionStorage.setItem("userid", res.data.id);
      
      })
      .catch((err) => console.log(err));
  };
  const addFreind=(theFollowedUserid,userid)=>{
    axios.post(`${APP_API_URL}/foll/add`,{
      theFollowedUserid:paramkey,
      thefollowingUserId:userid
    }).then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log(err)
    })
  }
  const handleFreind=()=>{
    addFreind(theFollowedUserid,userid) 
  }
  const updateUser = (
    id,
    image,
    coverimage,
    FirstName,
    LastName,
    username,
    email,
    Password,
    gender,
    DateOfBirth,
    bio
  ) => {
    axios
      .put(`${APP_API_URL}/user/pd/${id}`, {
        image: image,
        coverimage: coverimage,
        FirstName: FirstName,
        LastName: LastName,
        username: username,
        email: email,
        Password: Password,
        gender: gender,
        DateOfBirth: DateOfBirth,
        bio: bio,
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUpdate = (id) => {
    updateUser(
      id,
      image,
      coverimage,
      FirstName,
      LastName,
      username,
      email,
      Password,
      gender,
      DateOfBirth,
      bio
    );
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setImage(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const pickCoverImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setCoverImage(result);

    if (!result.canceled) {
      setCoverImage(result.assets[0].uri);
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
        setImage(data.secure_url);
      })
      .catch((err) => {
        Alert.alert("An Error Occured While Uploading");
      });
  };
  const handleLogout = () => {
    SessionStorage.removeItem("email");
    SessionStorage.removeItem("userid");
    console.log(SessionStorage,"sessionstorage");
    console.log("logout sccsess");
    navigation.navigate("login")
  };
  useEffect(() => {
    get();
  }, []);
  return (
    <ScrollView style={styles.container}>
    {userid === route.params.post && (
  <View style={styles.headerContainer}>
      <View style={styles.buttonContainer}>
        <Button title="Pick an image from camera roll" onPress={pickCoverImage} />
        {coverimage && (
          <Image
            source={{ uri: coverimage }}
            style={styles.coverPhoto}
          />
        )}
      </View>
    <View style={styles.profileContainer}>
      
        <View style={styles.buttonContainer}>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && (
            <Image
            source={{ uri: image }}
            style={{ width: 200, height: 200 }}
            />
          )}
        </View>
       
    </View>
    <Text style={styles.nameText}>Username:{username}</Text>
  <View style={styles.bioContainer}>
    <Text style={styles.bioText}>Bio: {bio}</Text>
  </View>
  <View style={styles.statsContainer}>
    <View style={styles.statContainer}>
      <Text style={styles.statCount}>post</Text>
      <Text style={styles.statLabel}>Posts</Text>
      <Button
        title=" posts"
        onPress={() =>
          navigation.navigate("Users", {
            paramKey: userid,
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
  </View>
    )} 
      
  {userid !== route.params.post ? (
    <View>
    
      <Button title="add friend" onPress={() => handleFreind()} />
    </View>
   ) : ( <View>

   </View>
   )} 
  <Button title="logout" onPress={() => handleLogout()} />
</ScrollView>
  );
}

const styles = {
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    alignItems: "center",
  },
  coverPhoto: {
    width: "100%",
    height: 200,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: -50,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  bioContainer: {
    padding: 15,
  },
  bioText: {
    color: "black",
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },
  statContainer: {
    alignItems: "center",
    flex: 1,
  },
  statCount: {
    fontSize: 20,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 16,
    color: "#999",
  },
  button: {
    backgroundColor: "#B0C4DE",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
};
export default Main;
