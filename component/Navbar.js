// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const Tab = createBottomTabNavigator();
// const onPressprofile = () => navigation.navigate("profile", { screen: "Main" })
// const onPressShop = () => navigation.navigate("shop", { screen: "Shop" });
// const onPresshome = () => navigation.navigate("home", { screen: "Home" })
// const onPressMessa = () => navigation.navigate("messa", { screen: "AllMessages" });
// const Navbar=()=>{
//   return (
//     <Tab.Navigator
//       initialRouteName="Feed"
//       screenOptions={{
//         tabBarActiveTintColor: '#e91e63',
//       }}
//     >
//       <Tab.Screen
//         name="home"
//         component={Home}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//         onPress={onPresshome}
//       />
//       <Tab.Screen
//         name="profile"
//         component={Main}
//         options={{
//           tabBarLabel: 'Updates',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="bell" color={color} size={size} />
//           ),
//           tabBarBadge: 3,
//         }}
//         onPress={onPressprofile}
//       />
//    <Tab.Screen
//         name="shop"
//         component={Shop}
//         options={{
//           tabBarLabel: 'Shop',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="bell" color={color} size={size} />
//           ),
//           tabBarBadge: 3,
//         }}
//       onPress={onPressShop}
//       />

//       <Tab.Screen
//         name="messa"
//         component={AllMessages}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" color={color} size={size}
//             onPress={onPressMessa} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
// export default Navbar