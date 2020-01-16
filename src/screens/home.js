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
} from 'react-native';

import HomeBuyer from './buyer/home/home';
import MyOrder from './buyer/my-order/my-order';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text>Ini Default Home</Text>
        {/* <HomeBuyer /> */}
        {/* <MyOrder /> */} 
      </View>
    );
  }
}
