import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button} from "react-native";
import { StackNavigator } from "react-navigation";
import Swiper from 'react-native-swiper';

export default class Dashboard extends Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#c0392b",
      elevation: null
    },
    headerLeft: null
  };

  render() {
    return (
      <View style={styles.layar}>
        <View style={styles.sublayar, styles.iklan}>
          <Swiper style={styles.sublayar} autoplay={true}>
            <View style={styles.slide1}>
              <Image style={styles.imgiklan} source={{uri: "http://ajmspk.pt-dgw.com:3040/module/testrn/slide1.png"}} />
            </View>
            <View style={styles.slide2}>
              <Image style={styles.imgiklan} source={{uri: "http://ajmspk.pt-dgw.com:3040/module/testrn/slide2.jpg"}} />
            </View>
            <View style={styles.slide3}>
              <Image style={styles.imgiklan} source={{uri: "http://ajmspk.pt-dgw.com:3040/module/testrn/slide3.jpg"}} />
            </View>
          </Swiper>
        </View>
        <View style={styles.sublayar, styles.kotakmenu}></View>
        <View style={styles.sublayar, styles.kotakbawah}>
          <TouchableOpacity style={styles.menukecil} onPress={() => this.props.navigation.navigate("Hal1")}><Image style={styles.logo1} source={require("../../img/icon1.png")} /></TouchableOpacity>
          <TouchableOpacity style={styles.menukecil} onPress={() => this.props.navigation.navigate("Hal2")}><Image style={styles.logo1} source={require("../../img/icon2.png")} /></TouchableOpacity>
          <TouchableOpacity style={styles.menukecil} onPress={() => this.props.navigation.navigate("Hal3")}><Image style={styles.logo1} source={require("../../img/icon3.png")} /></TouchableOpacity>
          <TouchableOpacity style={styles.menukecil} onPress={() => this.props.navigation.navigate("Hal4")}><Image style={styles.logo1} source={require("../../img/icon4.png")} /></TouchableOpacity>
        </View>
        <View style={styles.sublayar, styles.kotakbawah}>
        <TouchableOpacity style={styles.menukecil} onPress={() => this.props.navigation.navigate("Hal5")}><Image style={styles.logo1} source={require("../../img/icon5.png")} /></TouchableOpacity>
        <TouchableOpacity style={styles.menukecil} onPress={() => this.props.navigation.navigate("Hal6")}><Image style={styles.logo1} source={require("../../img/icon6.png")} /></TouchableOpacity>
        <TouchableOpacity style={styles.menukecil} onPress={() => this.props.navigation.navigate("Hal7")}><Image style={styles.logo1} source={require("../../img/icon7.png")} /></TouchableOpacity>
        <TouchableOpacity style={styles.menukecil} onPress={() => this.props.navigation.navigate("Hal8")}><Image style={styles.logo1} source={require("../../img/icon8.png")} /></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  layar: {
    flex: 1,
    backgroundColor: '#c0392b',
    flexDirection: 'column'
  },
  sublayar: {

  },
  iklan: {
    flex: 1,
    backgroundColor: 'red'
  },
  kotakmenu: {
    flex: 3,
    backgroundColor: '#e74c3c'
  },
  kotakbawah: {
    flex: 0.5,
    backgroundColor: '#c0392b',
    flexDirection: 'row'
  },
  menukecil: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c0392b',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c0392b',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c0392b',
  },
  logo1: {
    width: 50,
    height: 50
  },
  imgiklan: {
    width: 410,
    height: 120
  }
});

AppRegistry.registerComponent("Dahsboard", () => Dashoard);
