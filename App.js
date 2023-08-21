import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from "./component/Signup/Signup"
import LogIn from "./component/Signup/LogIn"
import Main from './component/Profile/Main';
import Users from './component/Profile/Users';
import Home from './component/Home/Home';
import Shop from './component/Shop/Shop';
import PostCard from './component/Home/PostCard';
import AllMessages from './component/chat/AllMessages';
import AddComment from './component/Home/AddComment';
import CommentCard from './component/Home/CommentCard';
import Messaging from './component/chat/Messaging';

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
      <Stack.Screen name="AddComment" component={AddComment} />
       <Stack.Screen name="commentcard" component={CommentCard} />
      <Stack.Screen name="messa" component={AllMessages} />
      <Stack.Screen name="com" component={Messaging} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

