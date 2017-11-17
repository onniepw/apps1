/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import { StackNavigator } from "react-navigation";

import Login from './src/components/login/Login';
import Dashboard from "./src/components/dashboard/Dashboard";
import ForgetPassword from "./src/components/login/ForgetPassword";
import Register from "./src/components/login/Register";
import Hal1 from "./src/components/temp/Hal1";
import Hal2 from "./src/components/temp/Hal2";
import Hal3 from "./src/components/temp/Hal3";
import Hal4 from "./src/components/temp/Hal4";
import Hal5 from "./src/components/temp/Hal5";
import Hal6 from "./src/components/temp/Hal6";
import Hal7 from "./src/components/temp/Hal7";
import Hal8 from "./src/components/temp/Hal8";

class Home extends Component<{}> {
  static navigationOptions = {
    headerStyle: {backgroundColor: "#c0392b", elevation: null},
    header: null
  };

  render() {
    return (
      <View style={styles.kotak}>
        <StatusBar barStyle="light-content" backgroundColor="#c0392b" />
        <Login navigation={this.props.navigation} />
      </View>
    );
  }
}

export default App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {title: "Home"}
  },
  Login: {
    screen: Login,
    navigationOptions: {title: "Login"}
  },
  Register: {
    screen: Register,
    navigationOptions: {title: "Register"}
  },
  ForgetPassword: {
    screen: ForgetPassword,
    navigationOptions: {title: "ForgetPassword"}
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {title: "Dashboard"}
  },
  Hal1: {
    screen: Hal1,
    navigationOptions: {title: "HALAMAN 1"}
  },
  Hal2: {
    screen: Hal2,
    navigationOptions: {title: "HALAMAN 2"}
  },
  Hal3: {
    screen: Hal3,
    navigationOptions: {title: "HALAMAN 3"}
  },
  Hal4: {
    screen: Hal4,
    navigationOptions: {title: "HALAMAN 4"}
  },
  Hal5: {
    screen: Hal5,
    navigationOptions: {title: "HALAMAN 5"}
  },
  Hal6: {
    screen: Hal6,
    navigationOptions: {title: "HALAMAN 6"}
  },
  Hal7: {
    screen: Hal7,
    navigationOptions: {title: "HALAMAN 7"}
  },
  Hal8: {
    screen: Hal8,
    navigationOptions: {title: "HALAMAN 8"}
  },
});

const styles = StyleSheet.create({
  kotak: {
    flex: 1
  }
});
