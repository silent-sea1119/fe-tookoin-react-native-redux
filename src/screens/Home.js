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

export default class Home extends Component {
  render() {
    return (
      <View>
        <HomeBuyer />
      </View>
    );
  }
}
