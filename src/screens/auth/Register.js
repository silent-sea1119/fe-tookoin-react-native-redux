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
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Container, Header, Content, Button, Item, Input} from 'native-base';
// import {Input} from 'react-native-elements';

export default class Register extends Component {
  render() {
    return (
      <>
        {/* <Header style={{backgroundColor: 'white', borderBottomWidth:1, borderEndColor: '#999'}} /> */}
        {/* Navbar */}

        <View
          style={{backgroundColor: '#FFF', height: 50, flexDirection: 'row', alignItems:'center', paddingHorizontal:10}}>
          <Ionicons
            name="ios-arrow-back"
            style={{
              fontSize: 30,
              color: 'black',
            }}>
            {' '}
          </Ionicons>
          <Text>
              Register
          </Text>
        </View>

        <View style={{backgroundColor: '#F6F6F6', padding: 10}}>
          {/* <Content> */}
          <Text style={{paddingVertical: 10, color:'#444'}}>
            Buat akun di Tokoo-in untuk kemudahan memesan dan memantau order
            Anda
          </Text>
          <Item  style={{marginBottom: 10}}>
            <Input style={{backgroundColor:'#FFF', borderRadius:10}} placeholder="Email" />
          </Item>

          <Item style={{marginBottom: 10}}>
            <Input style={{backgroundColor:'#FFF', borderRadius:10}} placeholder="Password" />
          </Item>

          <Button block success style={{borderRadius: 10}}>
            <Text style={{color: 'white'}}>Daftar Sekarang</Text>
          </Button>

          {/* </Content> */}
        </View>
      </>
    );
  }
}
