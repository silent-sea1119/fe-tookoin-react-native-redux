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
import {loginAccount} from '../../../redux/actions/auth/index';
import {SAPI_URL} from 'react-native-dotenv';
import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';
import {storeData, retrieveData} from '../../../utils';
import {showToast} from '../../../components/toast';
import {withNavigationFocus} from 'react-navigation';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      role: 0,
    };
  }

  handleMasuk = async () => {
    let data = {
      email: this.state.email,
      password: this.state.password,
    };
    let url = SAPI_URL + '/login';
    await Axios.post(url, data)
      .then(({data}) => {
        if (data.msg === 'SUCCESS') {
          console.log(data.data[0]);
          AsyncStorage.setItem('name_user', data.data[0].name_user);
          AsyncStorage.setItem('token', data.data[0].token);
          AsyncStorage.setItem('role', data.data[0].role.toString());
          AsyncStorage.setItem('email', data.data[0].email);
          AsyncStorage.setItem('address', data.data[0].address || '');
          AsyncStorage.setItem('phone', data.data[0].phone || '');
          AsyncStorage.setItem('id_user', data.data[0].id_user.toString())
          showToast(`Selamat datang ${data.data[0].name_user}, selamat berbelanja`, `success`);
          if (data.data[0].role === 1) {
            this.props.navigation.navigate('Profile');
          } else if (data.data[0].role === 2) {
            this.props.navigation.navigate('HomeSeller');
          }
        } else {
          showToast(`Email atau Password salah`, `warning`);
        }
      })
      .catch(showToast(`Koneksi error, silahkan coba lagi`, `warning`));
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
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Forgot')}>
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

export default withNavigationFocus(Login);
