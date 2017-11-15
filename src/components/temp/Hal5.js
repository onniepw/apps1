import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput } from "react-native";

export default class Hal5 extends Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#f1900f",
      elevation: null
    },
    //headerLeft: null
  };

  render() {
    return (
      <View style={styles.kotak1}>
        <View style={styles.kotak2}>
        <Text style={styles.judul}> HALAMAN 5 </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  kotak1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1900f'
  },
  kotak2: {
    alignItems: 'center',
    backgroundColor: 'white'
  },
  judul: {
    marginTop: 20,
    width: 160,
    opacity: 0.2,
    textAlign: 'center',
    color: 'black',
    fontWeight: '700'
  }
});

AppRegistry.registerComponent("Hal5", () => Hal5);
