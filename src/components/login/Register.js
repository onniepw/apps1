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

  //handleNameChange = (evt) => {
    //this.setState({ UserName: evt.target.value });
  //}

  //handleEmailChange = (evt) => {
    //this.setState({ UserEmail: evt.target.value });
  //}

  //handlePasswordChange = (evt) => {
    //this.setState({ UserPassword: evt.target.value });
  //}

  //handleSubmit = () => {
    //const { UserName, UserEmail, UserPassword } = this.state;
  //}

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
            placeholderTextColor="rgba(255,255,255,0.7)"
            //value={this.state.UserName}
            onChangeText={UserName => this.setState({UserName})}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="rgba(255,255,255,0.7)"
            //value={this.state.UserEmail}
            onChangeText={UserEmail => this.setState({UserEmail})}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            secureTextEntry
            //value={this.state.UserPassword}
            onChangeText={UserPassword => this.setState({UserPassword})}
          />

          <TouchableOpacity disabled={!isEnabled} style={styles.kotaktombol} onPress={this.UserRegistrationFunction}>
            <Text style={styles.texttombol}>REGISTRASI</Text>
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
    //headerLeft: null
  };

}

const styles = StyleSheet.create({
  kotak: {
    flex: 1,
    backgroundColor: '#c0392b'
  },
  kotaklogo: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 100
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
    backgroundColor: 'rgba(255,255,255,0.2)'
  },
  texttombol: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '700'
  },
  tombol: {
    paddingVertical: 5
  }
});

AppRegistry.registerComponent("Register", () => Register);
