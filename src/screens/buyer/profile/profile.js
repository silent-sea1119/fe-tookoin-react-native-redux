import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import styles from './profile.style';
import Footer from '../../../components/footer/footer';

class ProfileBuyer extends Component {
  render() {
    const {container, header, headerText, body, username, code} = styles;
    return (
      <View style={container}>
        <View style={header}>
          <View style={headerText}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>Account</Text>
          </View>
          <View style={username}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginVertical: 20,
                marginLeft: 20,
              }}
              source={require('../../../assets/images/Avatar.png')}
            />
            <Text>AVA & USERNAME</Text>
          </View>
          <View style={code}>
            <Text>Username</Text>
          </View>
        </View>
        <View style={body}>
          <Text>Body</Text>
        </View>
        <Footer />
      </View>
    );
  }
}

export default ProfileBuyer;
