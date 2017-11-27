import React, { Component } from "react";
import {
  AppRegistry,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
  Alert
} from "react-native";
import { StackNavigator } from "react-navigation";


export default class Login extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      UserPassword: ""
    };
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "white",
      elevation: null
    },
    header: null
  };

  UserLoginFunction = () =>{
    const { UserName }  = this.state;
    const { UserPassword }  = this.state;

    fetch('http://ajmspk.pt-dgw.com:3040/module/testrn/user_login.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: UserName,
        password: UserPassword
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        // If server response message same as Data Matched
        if(responseJson === 'Data Matched')
         {
             //Then open Profile activity and send user email to profile activity.
             this.props.navigation.navigate('Dashboard', { UserName: UserName });
         }
        else
         {
           Alert.alert(responseJson);
         }
      }).catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.kotak}>
        <View behavior="padding" style={styles.kotak}>
          <View style={styles.kotaklogo}>
            <Image style={styles.logo} source={require("../../img/chick.png")} />
            <Text style={styles.judul}>by GoldenLab</Text>
          </View>

          <KeyboardAvoidingView behavior="padding" style={styles.kibot}>
            <TextInput
              placeholder="Username"
              placeholderTextColor="white"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              //keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid='white'
              style={{color: "white"}}
              value={this.state.UserName}
              onChangeText={UserName => this.setState({ UserName })}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="white"
              returnKeyType="go"
              secureTextEntry
              underlineColorAndroid='white'
              style={{color: "white"}}
              onSubmitEditing={() => this.tombolInput.focus()}
              ref={input => (this.passwordInput = input)}
              value={this.state.UserPassword}
              onChangeText={UserPassword => this.setState({ UserPassword })}
            />


            <TouchableOpacity style={styles.kotaktombol} onPress={this.UserLoginFunction}>
              <Text style={styles.texttombol} ref={component => (this.tombolInput = component)}>LOGIN</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>

        <TouchableOpacity style={styles.tombol}>
          <Text style={styles.textlink} onPress={() => this.props.navigation.navigate("Register")} title="Sign up">Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tombol}>
          <Text style={styles.textlink} onPress={() => this.props.navigation.navigate("ForgetPassword")} title="Forget Password">Forget Password</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles=StyleSheet.create({
  kotak: {
    flex: 1,
    backgroundColor: '#c0392b'
  },
  kotaklogo: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  logo: {
    width: 320,
    height: 135
  },
  judul: {
    color: '#c0392b',
    textAlign: 'center',
    marginTop: 10,
    //width: 160,
    opacity: 0.8,
    fontWeight: '900'
  },
  kibot: {
    margin: 20,
    padding: 20,
    alignSelf: 'stretch'
  },
  kotaktombol: {
    paddingVertical: 15,
    //backgroundColor: 'rgba(255,255,255,0.2)'
    backgroundColor: 'white'
  },
  texttombol: {
    textAlign: 'center',
    color: '#c0392b',
    fontWeight: '700'
  },
  textlink: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700'
  },
  tombol: {
    paddingVertical: 5,
  }
});

AppRegistry.registerComponent("Login", () => Login);
