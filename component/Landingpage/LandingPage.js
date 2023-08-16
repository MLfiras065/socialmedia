// import * as React from "react";

// import { StyleSheet, Text, View,LinearGradient ,Image} from "react-native";
// // import  {LinearGradient } from "expo-linear-gradient";
// import { Border, Color, FontSize, FontFamily } from "../Landingpage/GlobalStyles";

// const LandingPage = () => {
//   return (
//     <View>
//     <LinearGradient
//       style={styles.introduce}
//       locations={[0, 0.08, 0.73, 1]}
//       colors={["#3b21b7", "#8b64da", "#d195ee", "#cecbd3"]}
//     >
//       <Image
//         style={styles.introduceChild}
//         contentFit="cover"
//         // source={require("../assets/rectangle-3656.png")}
//       />
//       <View style={styles.statusbarIphone1313Pro}>
//         <Image
//           style={styles.notchIcon}
//           contentFit="cover"
//         //   source={require("../assets/notch.png")}
//         />
//         <Image
//           style={[styles.rightSideIcon, styles.iconLayout]}
//           contentFit="cover"
//         //   source={require("../assets/right-side.png")}
//         />
//         <View style={[styles.leftSide, styles.leftSideLayout]}>
//           <View style={[styles.statusbarTime, styles.leftSideLayout]}>
//             <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
//           </View>
//         </View>
//       </View>
//       <View style={[styles.infor, styles.inforLayout]}>
//         <View style={[styles.inforChild, styles.childShadowBox]} />
//         <Image
//           style={[styles.dotsIcon, styles.iconLayout]}
//           contentFit="cover"
//         //   source={require("../assets/dots.png")}
//         />
//         <Text style={[styles.welcome, styles.welcomeText]}>{`Welcome ! `}</Text>
//         <Text
//           style={[styles.experienceAWonderful, styles.getStarted1FlexBox]}
//         >{`Experience a wonderful 
// moment with`}</Text>
//         <Text style={[styles.ciao, styles.textFlexBox]}>Ciao</Text>
//       </View>
//       <View style={[styles.getStarted, styles.getLayout]}>
//         <View style={[styles.getStartedChild, styles.getLayout]} />
//         <Text
//           style={[styles.getStarted1, styles.getStarted1FlexBox]}
//         >{`Get Started `}</Text>
//       </View>
//     </LinearGradient>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   iconLayout: {
//     height: 11,
//     position: "absolute",
//   },
//   leftSideLayout: {
//     height: 21,
//     width: 54,
//     left: "50%",
//     position: "absolute",
//   },
//   textFlexBox: {
//     justifyContent: "center",
//     alignItems: "center",
//     display: "flex",
//     textAlign: "center",
//     position: "absolute",
//   },
//   inforLayout: {
//     height: 282,
//     position: "absolute",
//   },
//   childShadowBox: {
//     shadowOpacity: 1,
//     shadowOffset: {
//       width: -8,
//       height: -8,
//     },
//     top: 0,
//     borderRadius: Border.br_21xl,
//   },
//   welcomeText: {
//     textShadowRadius: 4,
//     textShadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     textShadowColor: "rgba(0, 0, 0, 0.25)",
//   },
//   getStarted1FlexBox: {
//     textAlign: "left",
//     lineHeight: 29,
//     color: Color.labelColorDarkPrimary,
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   getLayout: {
//     height: 51,
//     width: 317,
//     position: "absolute",
//   },
//   introduceChild: {
//     height: 714,
//     width: 390,
//     left: 0,
//     top: 0,
//     position: "absolute",
//     borderRadius: Border.br_21xl,
//   },
//   notchIcon: {
//     marginLeft: -81.5,
//     top: -2,
//     width: 164,
//     height: 31,
//     display: "none",
//     left: "50%",
//     position: "absolute",
//   },
//   rightSideIcon: {
//     marginLeft: 106.17,
//     top: 17,
//     width: 67,
//     left: "50%",
//   },
//   text: {
//     top: 1,
//     fontSize: FontSize.defaultBoldSubheadline_size,
//     lineHeight: 20,
//     fontWeight: "600",
//     fontFamily: FontFamily.defaultBoldSubheadline,
//     height: 20,
//     color: Color.labelColorDarkPrimary,
//     letterSpacing: 0,
//     justifyContent: "center",
//     alignItems: "center",
//     display: "flex",
//     width: 54,
//     left: 0,
//   },
//   statusbarTime: {
//     marginLeft: -27,
//     borderRadius: Border.br_5xl,
//     top: 0,
//   },
//   leftSide: {
//     marginLeft: -171.5,
//     top: 12,
//   },
//   statusbarIphone1313Pro: {
//     top: 5,
//     right: -1,
//     left: 2,
//     height: 44,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   inforChild: {
//     left: 69,
//     backgroundColor: "rgba(203, 152, 235, 0.8)",
//     shadowColor: "rgba(0, 0, 0, 0.6)",
//     shadowRadius: 16,
//     elevation: 16,
//     height: 282,
//     position: "absolute",
//     width: 390,
//   },
//   dotsIcon: {
//     top: 26,
//     left: 128,
//     width: 62,
//   },
//   welcome: {
//     top: 63,
//     left: 119,
//     fontSize: 36,
//     lineHeight: 22,
//     fontFamily: FontFamily.interBold,
//     fontWeight: "700",
//     textAlign: "center",
//     textShadowRadius: 4,
//     textShadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     textShadowColor: "rgba(0, 0, 0, 0.25)",
//     color: Color.labelColorDarkPrimary,
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   experienceAWonderful: {
//     top: 98,
//     left: 123,
//     fontSize: 20,
//     fontWeight: "500",
//     fontFamily: FontFamily.interMedium,
//     textShadowRadius: 4,
//     textShadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     textShadowColor: "rgba(0, 0, 0, 0.25)",
//   },
//   ciao: {
//     top: 129,
//     left: 1,
//     fontSize: 40,
//     letterSpacing: 1,
//     lineHeight: 16,
//     fontFamily: FontFamily.waterfallRegular,
//     width: 560,
//     height: 12,
//     transform: [
//       {
//         rotate: "0.11deg",
//       },
//     ],
//   },
//   infor: {
//     top: 562,
//     left: -70,
//     width: 561,
//   },
//   getStartedChild: {
//     backgroundColor: "#635a8f",
//     shadowColor: "rgba(0, 0, 0, 0.25)",
//     shadowRadius: 6,
//     elevation: 6,
//     shadowOpacity: 1,
//     shadowOffset: {
//       width: -8,
//       height: -8,
//     },
//     top: 0,
//     borderRadius: Border.br_21xl,
//     left: 0,
//   },
//   getStarted1: {
//     marginTop: -14.5,
//     marginLeft: -65.5,
//     top: "50%",
//     fontSize: 22,
//     fontFamily: FontFamily.interBold,
//     fontWeight: "700",
//     left: "50%",
//   },
//   getStarted: {
//     marginLeft: -149,
//     top: 732,
//     left: "50%",
//   },
//   introduce: {
//     flex: 1,
//     width: "100%",
//     height: 844,
//     backgroundColor: "transparent",
//     overflow: "hidden",
//     borderRadius: Border.br_21xl,
//   },
// });

// export default LandingPage;
