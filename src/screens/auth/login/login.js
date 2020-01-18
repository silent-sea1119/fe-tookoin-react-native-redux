import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  Text,
  DrawerLayoutAndroid,
  Alert,
} from 'react-native';
import {Input, ThemeConsumer} from 'react-native-elements';
import styles from './login.style';
import Footer from '../../../components/footer/footer';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      role: '',
    };
  }
  handleMasuk = () => {
    if (this.state.email === 'Seller') {
      this.setState({role: '0'});
    } else if (this.state.email === 'Buyer') {
      this.setState({role: '1'});
    }
    if (this.state.role === '0') {
      this.props.navigation.navigate('ProfileSeller');
      console.log('MASOK');
    } else if (this.state.role === '1') {
      this.props.navigation.navigate('Profile');
    } else {
      Alert.alert('Info', 'ERROR');
    }
  };
  render() {
    const {
      container,
      header,
      body,
      bodyText,
      formLogin,
      buttonLogin,
      buttonRegister,
    } = styles;
    return (
      <View style={container}>
        <View style={header}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Login</Text>
        </View>
        <ScrollView>
          <View style={body}>
            <Image
              style={{
                width: '100%',
                height: 160,
              }}
              source={require('../../../assets/images/LoginScreen.png')}
            />
            <View style={bodyText}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Login untuk mempermudah anda melacak order
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  color: 'gray',
                }}>
                Anda dapat melanjutkan belanja dengan login menggunakan email
              </Text>
            </View>
            <View style={formLogin}>
              <Input
                inputContainerStyle={{marginLeft: -10, height: 35}}
                labelStyle={{
                  marginHorizontal: -10,
                  fontSize: 12,
                }}
                inputStyle={{fontSize: 12}}
                placeholder="Input Email"
                label="Email"
                onChange={e => {
                  this.setState({email: e.nativeEvent.text});
                  console.log(e.nativeEvent.text);
                }}
              />
              <View style={{paddingRight: 10}}>
                {/* <Text style={{fontSize: 12, color: 'red'}}>Invalid Email</Text> */}
                <Text style={{fontSize: 12, color: 'red'}}> </Text>
              </View>
              <Input
                inputContainerStyle={{marginLeft: -10, height: 35}}
                labelStyle={{
                  marginHorizontal: -10,
                  fontSize: 12,
                }}
                secureTextEntry={true}
                inputStyle={{fontSize: 12}}
                placeholder="Input Password"
                label="Password"
                onChange={e => {
                  this.setState({password: e.nativeEvent.text});
                  console.log(e.nativeEvent.text);
                }}
              />
              <View style={{paddingRight: 10}}>
                {/* <Text style={{fontSize: 12, color: 'red'}}>Invalid Email</Text> */}
                <Text style={{fontSize: 12, color: 'red'}}> </Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => this.handleMasuk()}>
              <View style={buttonLogin}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  Masuk Sekarang
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: 12,
                  color: 'gray',
                }}>
                Lupa Password ?
              </Text>
              <Text> </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#62BA67',
                    fontSize: 12,
                    textDecorationLine: 'underline',
                  }}>
                  ketuk di sini
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                marginVertical: 10,
              }}>
              <Text style={{fontSize: 12, color: 'gray'}}>
                Belum punya akun ?
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Register')}>
                <View style={buttonRegister}>
                  <Text style={{color: '#62BA67', fontWeight: 'bold'}}>
                    Daftar
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
