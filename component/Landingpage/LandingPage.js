import React from "react";
import { StyleSheet, Text, View,Image, TouchableOpacity} from "react-native";
// import  {LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily } from "./GlobalStyles";

const LandingPage = () => {
 
 
    return (
   
   
     
        <View style={styles.splashScreen}>
          <View style={[styles.statusBar, styles.statusPosition]}>
            <View style={[styles.statusBarChild, styles.statusPosition]} />
            <View style={styles.timeParent}>
             
              <Image
                style={styles.groupChild}
                resizeMode="cover"
                // source={require("../assets/group-1727.png")}
              />
            </View>
          </View>
          <View style={[styles.logoParent, styles.logoLayout]}>
            <View style={[styles.logo, styles.logoLayout]}>
              <Text style={[styles.shieldpay, styles.shieldpayPosition]}>
                SHIELDPAY
              </Text>
            </View>
            <Image
              style={[styles.asset1051, styles.shieldpayPosition]}
              resizeMode="cover"
              // source={require("../assets/asset-105-1.png")}
            /> 
            <View>
            <Text style={{color:"white"}}>
Welcome Experience a wonderful moment with 
            </Text>
            <TouchableOpacity
            >
              <Text style={{color:"white"}}>Get Started</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      statusPosition: {
        left: "0%",
        top: "0%",
        position: "absolute",
      },
      timeFlexBox: {
        textAlign: "center",
        color: Color.white,
      },
      logoLayout: {
        width: 217,
        position: "absolute",
      },
      shieldpayPosition: {
        top: 0,
        position: "absolute",
      },
      statusBarChild: {
        height: "100%",
        bottom: "0%",
        right: "0%",
        width: "100%",
      },
      time: {
        fontSize: 15,
        letterSpacing: 0,
        fontWeight: "500",
        fontFamily: FontFamily.sFProText,
        left: "0%",
        top: "0%",
        position: "absolute",
      },
      groupChild: {
        height: "62.98%",
        width: "20.8%",
        top: "18.5%",
        bottom: "18.52%",
        left: "79.2%",
        maxWidth: "100%",
        maxHeight: "100%",
        right: "0%",
        position: "absolute",
        overflow: "hidden",
      },
      timeParent: {
        height: "40.91%",
        width: "87.2%",
        top: "31.82%",
        right: "6.4%",
        bottom: "27.27%",
        left: "6.4%",
        position: "absolute",
      },
      statusBar: {
        height: "5.42%",
        bottom: "94.58%",
        right: "0%",
        width: "100%",
      },
      shieldpay: {
        fontSize: 40,
        fontWeight: "700",
        fontFamily: FontFamily.poppinsBold,
        left: 0,
        textAlign: "center",
        color: Color.white,
      },
      logo: {
        top: 141,
        height: 60,
        left: 0,
      },
      asset1051: {
        left: 48,
        width: 121,
        height: 121,
        overflow: "hidden",
      },
      logoParent: {
        top: 305,
        left: 79,
        height: 201,
      },
      splashScreen: {
        backgroundColor: "#002D62",
        flex: 1,
        height: 812,
        overflow: "hidden",
        width: "100%",
      },
    });
    

export default LandingPage ;
