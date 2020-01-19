import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './accountOption.style';
import AsyncStorage from '@react-native-community/async-storage';
import {showToast} from '../toast/';

const AccountOption = props => {
  const {container} = styles;
  const handleClick = async () => {
    if (props.title === 'Keluar') {
      showToast(`Anda berhasil Logout`, `success`);
      await AsyncStorage.clear().then(() => {
        props.navigation.navigate('Login');
      });
    } else if (props.title === 'Alamat Saya') {
      props.navigation.navigate('DaftarAlamatBuyer');
    } else if (props.title === 'Edit Profile') {
      props.navigation.navigate('EditProfileBuyer');
    }
  };
  return (
    <TouchableOpacity onPress={() => handleClick()}>
      <View style={container}>
        <Text style={{color: props.color}}>{props.title}</Text>
        <Icon name="chevron-right" size={14} color="#62BA67" />
      </View>
    </TouchableOpacity>
  );
};

export default AccountOption;
