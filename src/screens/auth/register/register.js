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
  Text,
  DrawerLayoutAndroid,
  Alert,
} from 'react-native';
import {registerAccount} from '../../../redux/actions/auth/index';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ButtonGroup, Input} from 'react-native-elements';
import {
  Container,
  Header,
  Content,
  Button,
  Item,
  // Input,
  Toast,
} from 'native-base';
import {API_URL} from 'react-native-dotenv';
import Axios from 'axios';
import {showToast} from '../../../components/toast';
// import {Input} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    // borderBottomColor: '#F5F5F6',
    // borderBottomWidth: 4,
  },

  backIconNavbar: {
    fontSize: 30,
    color: '#FFF',
  },
  textNavbar: {fontWeight: 'bold', fontSize: 16, color: '#555'},
  dummyIcon: {color: '#FFF'},

  mainForm: {flex: 1, backgroundColor: '#FFF', padding: 20},
  // textIntro: {paddingVertical: 10, color: '#444'},
  textIntro: {marginBottom: 15, color: '#444'},

  textPasswordContainer: {marginBottom: 15},
  textPassword: {paddingLeft: 15, backgroundColor: '#FFF', borderRadius: 10},

  textEmailContainer: {marginBottom: 15},
  textEmail: {paddingLeft: 15, backgroundColor: '#FFF', borderRadius: 10},

  textButtonSubmit: {color: 'white', fontWeight: 'bold'},
  textButtonSubmitContainer: {borderRadius: 5, backgroundColor: '#00B444'},
});

class Register extends Component {
  state = {
    role: 1,
    selectedIndex: 0,
    user_type: 'buyer',
    email: '',
    name_user: '',
    password: '',
    registered: false,
  };

  onClickSubmit = async () => {
    // this.props.navigation.navigate('Login');
    // console.log('register with: ',this.state.email, this.state.password, this.state.user_type)

    console.log('clicked submit');
    console.log('email', this.state.email);
    console.log('password', this.state.password);
    console.log('role', this.state.role);

    let data = {
      name_user: this.state.name_user,
      email: this.state.email,
      password: this.state.password,
    };

    let nameValidate = /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,50}$/.test(
      this.state.name_user,
    );
    let emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      this.state.email,
    );
    let passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(
      this.state.password,
    );

    if (nameValidate && emailValidate && passwordValidate) {
      let url = API_URL + '/register/' + this.state.role;
      // console.log(url);
      await Axios.post(url, data)
        .then(res => {
          if (res.data.msg === 'Email already exist') {
            Alert.alert(res.data.msg);
          } else {
            Alert.alert(
              'Register Success',
              'Please Login with your registered Account',
            );
            this.props.navigation.navigate('Login');
          }
        })
        .catch(err => console.log(err.msg));
    } else if (!nameValidate && !emailValidate && !passwordValidate) {
      // Alert.alert('Form Input Error', 'Please Fill The Form Correctly');
      showToast(`Form Input Error, Please Fill The Form Correctly`, `warning`);
    } else if (!nameValidate) {
      // Alert.alert(
      //   'Name Incorrect Format',
      //   'Name First Letter Must Be Uppercase',
      // );
      showToast(
        `Name Incorrect Format, Name First Letter Must Be Uppercase`,
        `warning`,
      );
    } else if (!emailValidate) {
      // Alert.alert('Email Incorrect Format', 'Email not in correct format');
      showToast(
        `Email Incorrect Format', 'Email not in correct format`,
        `warning`,
      );
    } else if (!passwordValidate) {
      // Alert.alert(
      //   'Password Incorrect Format',
      //   'Password must be at least 8 characters and must consist minimal 1 Uppercase, 1 lowercase and 1 number',
      // );
      showToast(
        `Password must be at least 8 characters and must consist minimal 1 Uppercase, 1 lowercase and 1 number`,
        `warning`,
      );
    }
  };

  showToast = (message, types) => {
    Toast.show({
      text: message,
      buttonText: 'Okay',
      type: types == 'warning' ? 'warning' : 'success',
      duration: 3000,
      position: 'bottom',
    });
  };

  render() {
    const role = ['Buyer', 'Seller'];
    return (
      <>
        <View style={styles.container}>
          {/* Navbar */}
          <Ionicons
            name="ios-arrow-back"
            style={styles.backIconNavbar}></Ionicons>
          <Text style={styles.textNavbar}>Daftar</Text>
          <Ionicons name="ios-arrow-back" style={styles.dummyIcon}></Ionicons>
        </View>

        <View style={styles.mainForm}>
          {/* Intro */}
          <Text style={styles.textIntro}>
            Buat akun di Tokoo-in untuk kemudahan memesan dan memantau order
            Anda
          </Text>

          {/* Main Form */}
          {/* <Item style={styles.textEmailContainer}>
            <Input
              labelStyle={{
                marginHorizontal: -10,
                fontSize: 12,
              }}
              style={styles.textEmail}
              placeholder="Nama Lengkap"
              inputStyle={{fontSize: 12}}
              value={this.state.name_user}
              onChangeText={name_user => this.setState({name_user})}
            />
          </Item> */}

          <Input
            inputContainerStyle={{marginLeft: -10, height: 35, marginBottom:15}}
            labelStyle={{
              marginHorizontal: -10,
              fontSize: 12,
            }}
            inputStyle={{fontSize: 12}}
            placeholder="Nama Lengkap"
            label="Name"
            value={this.state.name_user}
            onChangeText={name_user => this.setState({name_user})}
          />

          {/* Main Form */}
          {/* <Item style={styles.textEmailContainer}>
            <Input
              type="email"
              style={styles.textEmail}
              placeholder="Email"
              value={this.state.email}
              onChangeText={email => this.setState({email})}
            />
          </Item> */}

          <Input
            inputContainerStyle={{marginLeft: -10, height: 35, marginBottom:15}}
            labelStyle={{
              marginHorizontal: -10,
              fontSize: 12,
            }}
            inputStyle={{fontSize: 12}}
            placeholder="Input Email"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />


          <Input
            inputContainerStyle={{marginLeft: -10, height: 35, marginBottom:15}}
            labelStyle={{
              marginHorizontal: -10,
              fontSize: 12,
            }}
            secureTextEntry={true}
            inputStyle={{fontSize: 12}}
            placeholder="Input Password"
            value={this.state.password}
            label="Password"
            onChangeText={password => this.setState({password})
            
          }
          />

          {/* <Item style={styles.textPasswordContainer}>
            <Input
              style={styles.textPassword}
              placeholder="Password"
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={password => this.setState({password})}
            />
          </Item> */}

          <ButtonGroup
            onPress={selectedIndex => {
              this.setState({selectedIndex});
              if (selectedIndex === 0) {
                this.setState({user_type: 'buyer'});
                this.setState({role: 1});
              } else if (selectedIndex === 1) {
                this.setState({user_type: 'seller'});
                this.setState({role: 2});
              }
            }}
            selectedIndex={this.state.selectedIndex}
            buttonStyle={{backgroundColor: '#FFF'}}
            selectedButtonStyle={{backgroundColor: '#00B444'}}
            buttons={role}
            containerStyle={{
              marginTop:20,
              borderRadius: 10,
              marginBottom: 20,
              marginLeft: 0,
              marginRight: 0,
            }}
          />

          {/* color="#00B444" */}
          <Button
            block
            style={styles.textButtonSubmitContainer}
            onPress={e => {
              this.onClickSubmit();
            }}>
            <Text style={styles.textButtonSubmit}>Daftar Sekarang</Text>
          </Button>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingTop: 20,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: 'gray',
                }}>
                Sudah punya akun?
              </Text>
              <Text> </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Login');
                }}>
                <Text
                  style={{
                    color: '#62BA67',
                    fontSize: 12,
                    textDecorationLine: 'underline',
                  }}>
                  Sign In disini
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default Register;
