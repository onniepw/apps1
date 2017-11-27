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

export default class Reg_Pemilik1 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nama: '',
      alamat: '',
      kota: '',
      phone: '',
      photo1: '',
      photo2: '',
      photo3: '',
      no_npwp: '',
      nama_npwp: '',
      alamat_npwp: '',
      id_salesman: '',
      id_wilayah: '',
      latitude: '',
      longitude: ''
    }
  }

  TokoRegistrationFunction = () =>{
    const { nama }  = this.state;
    const { alamat }  = this.state;
    const { kota }  = this.state;
    const { phone }  = this.state;
    const { photo1 }  = this.state;
    const { photo2 }  = this.state;
    const { photo3 }  = this.state;
    const { no_npwp }  = this.state;
    const { nama_npwp }  = this.state;
    const { alamat_npwp }  = this.state;
    const { id_salesman }  = this.state;
    const { id_wilayah }  = this.state;
    const { latitude }  = this.state;
    const { longitude }  = this.state;

    fetch('http://ajmspk.pt-dgw.com:3040/module/testrn/user_reg.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nama: nama,
        alamat: alamat,
        kota: kota,
        phone: phone,
        photo1: photo1,
        photo2: photo2,
        photo3: photo3,
        no_npwp: no_npwp,
        nama_npwp: nama_npwp,
        alamat_npwp: alamat_npwp,
        id_salesman: id_salesman,
        id_wilayah: id_wilayah,
        latitude: latitude,
        longitude: longitude
      })
    }).then((response) => response.json())
      .then((responseJson) => {
  // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
        this.props.navigation.navigate('Reg_Pemilik2');
      }).catch((error) => {
        console.error(error);
      });

  }

render() {
  const { nama, alamat, kota, phone, photo1, photo2, photo3, no_npwp, nama_npwp,
    alamat_npwp, id_salesman, id_wilayah, latitude,longitude } = this.state;
  const isEnabled =
          nama.length > 0;
  return (
    <View style={styles.kotak}>
      <View behavior="padding" style={styles.kotak}>
        <Text style={styles.judul}>Registrasi Toko</Text>

        <KeyboardAvoidingView behavior="padding" style={styles.kibot}>
          <Text style={styles.subjudul}>Data Toko</Text>
          <TextInput
            placeholder="Nama"
            placeholderTextColor="#c0392b"
            underlineColorAndroid='#c0392b'
            style={{color: "#c0392b"}}
            onSubmitEditing={() => this.alamatInput.focus()}
            onChangeText={nama => this.setState({nama})}
          />
          <TextInput
            placeholder="Alamat"
            placeholderTextColor="#c0392b"
            underlineColorAndroid='#c0392b'
            style={{color: "#c0392b"}}
            onSubmitEditing={() => this.phoneInput.focus()}
            ref={input => (this.alamatInput = input)}
            onChangeText={alamat => this.setState({alamat})}
          />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#c0392b"
            underlineColorAndroid='#c0392b'
            style={{color: "#c0392b"}}
            onSubmitEditing={() => this.no_npwpInput.focus()}
            ref={input => (this.phoneInput = input)}
            onChangeText={phone => this.setState({phone})}
          />
          <Text style={styles.subjudul}>Data Pajak</Text>
          <TextInput
            placeholder="No NPWP"
            placeholderTextColor="#c0392b"
            underlineColorAndroid='#c0392b'
            style={{color: "#c0392b"}}
            onSubmitEditing={() => this.nama_npwpInput.focus()}
            ref={input => (this.no_npwpInput = input)}
            onChangeText={no_npwp => this.setState({no_npwp})}
          />
          <TextInput
            placeholder="Nama NPWP"
            placeholderTextColor="#c0392b"
            underlineColorAndroid='#c0392b'
            style={{color: "#c0392b"}}
            onSubmitEditing={() => this.alamat_npwpInput.focus()}
            ref={input => (this.nama_npwpInput = input)}
            onChangeText={nama_npwp => this.setState({nama_npwp})}
          />
          <TextInput
            placeholder="Alamat NPWP"
            placeholderTextColor="#c0392b"
            underlineColorAndroid='#c0392b'
            style={{color: "#c0392b"}}
            onSubmitEditing={() => this.tombolInput.focus()}
            ref={input => (this.alamat_npwpInput = input)}
            onChangeText={alamat_npwp => this.setState({alamat_npwp})}
          />
          <TouchableOpacity
            disabled={!isEnabled}
            style={styles.kotaktombol}
            onPress={this.TokoRegistrationFunction}
          >
            <Text style={styles.texttombol} ref={component => (this.tombolInput = component)}>SELANJUTNYA</Text>
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
  subjudul: {
    color: 'black',
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

AppRegistry.registerComponent("Reg_Pemilik1", () => Reg_Pemilik1);
