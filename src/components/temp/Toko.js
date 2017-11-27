import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight} from "react-native";
import ActionButton from 'react-native-action-button';

export default class Toko extends Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#c0392b",
      elevation: null
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerTintColor: 'white',
    //headerLeft: null
  };

  render() {
    return (
      <View style={styles.kotak1}>
        <View style={styles.kotak2}>
          <Text style={styles.judul}> HALAMAN 1 </Text>
        </View>
        <TouchableHighlight
          style={styles.addButton}
          underlayColor='#e74c3c'
          onPress={() => this.props.navigation.navigate("Reg_Toko")}
        >
          <Text style={{fontSize: 50, color: 'white'}}>+</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  kotak1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
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
  },
  addButton: {
    backgroundColor: '#c0392b',
    borderColor: '#c0392b',
    borderWidth: 1,
    height: 75,
    width: 75,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right:20,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  }
});

AppRegistry.registerComponent("Toko", () => Toko);
