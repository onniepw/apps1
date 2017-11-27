import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity} from "react-native";

export default class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      UserName: '',
      UserEmail: '',
      UserPassword: ''
    }
  }

  UserRegistrationFunction = () =>{
    const { UserName }  = this.state;
    const { UserEmail }  = this.state;
    const { UserPassword }  = this.state;

    fetch('http://ajmspk.pt-dgw.com:3040/module/testrn/user_reg.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nama: UserName,
        email: UserEmail,
        password: UserPassword
      })
    }).then((response) => response.json())
      .then((responseJson) => {
  // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
        this.props.navigation.navigate('Login');
      }).catch((error) => {
        console.error(error);
      });

  }

render() {
  const { UserName, UserEmail, UserPassword } = this.state;
  const isEnabled =
          UserName.length > 0 &&
          UserEmail.length > 0 &&
          UserPassword.length > 0;
  return (
    <View style={styles.kotak}>
      <View behavior="padding" style={styles.kotak}>
        <Text style={styles.judul}>Untuk bisa login silahkan registrasi terlebih dahulu</Text>

        <KeyboardAvoidingView behavior="padding" style={styles.kibot}>
          <TextInput
            placeholder="Nama"
            placeholderTextColor="#c0392b"
            //value={this.state.UserName}
            underlineColorAndroid='#c0392b'
            onSubmitEditing={() => this.emailInput.focus()}
            onChangeText={UserName => this.setState({UserName})}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#c0392b"
            onSubmitEditing={() => this.passwordInput.focus()}
            ref={input => (this.emailInput = input)}
            //value={this.state.UserEmail}
            underlineColorAndroid='#c0392b'
            onChangeText={UserEmail => this.setState({UserEmail})}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#c0392b"
            secureTextEntry
            onSubmitEditing={() => this.tombolInput.focus()}
            ref={input => (this.passwordInput = input)}
            //value={this.state.UserPassword}
            underlineColorAndroid='#c0392b'
            onChangeText={UserPassword => this.setState({UserPassword})}
          />

          <TouchableOpacity
            disabled={!isEnabled}
            style={styles.kotaktombol}
            onPress={this.UserRegistrationFunction}
          >
            <Text style={styles.texttombol} ref={component => (this.tombolInput = component)}>REGISTRASI</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

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

}

const styles = StyleSheet.create({
  kotak: {
    flex: 1,
    backgroundColor: 'white'
  },
  kotaklogo: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  judul: {
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    width: 160,
    opacity: 0.8
  },
  kibot: {
    margin: 20,
    padding: 20,
    alignSelf: 'stretch'
  },
  kotaktombol: {
    paddingVertical: 15,
    backgroundColor: '#c0392b'
  },
  texttombol: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700'
  },
  tombol: {
    paddingVertical: 5
  }
});

AppRegistry.registerComponent("Register", () => Register);
