import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './search.style';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <Icon name="search" size={20} color="#0DB957" />
      <TextInput
        placeholder="Cari yang segar disini"></TextInput>
    </View>
  );
};

export default Search;
