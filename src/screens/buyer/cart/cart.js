import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import styles from './cart.style';
import Footer from '../../../components/footer/footer';

class InboxBuyer extends Component {
  render() {
    const {container, header, body} = styles;
    return (
      <View style={container}>
        <View style={header}>
          <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
            Cart
          </Text>
        </View>
        <ScrollView>
          <View style={body}>
            <Image
              style={{width: '60%', resizeMode: 'contain'}}
              source={require('../../../assets/images/Inbox.png')}
            />
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontWeight: 'bold',
                marginTop: -50,
                color: 'gray',
              }}>
              Cart is Empty
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default InboxBuyer;
