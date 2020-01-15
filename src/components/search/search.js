import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './search.style';

const Search = () => {
  const {container} = styles;
  return (
    <View>
      <TextInput
        style={container}
        placeholder="Cari yang segar disini"></TextInput>
    </View>
  );
};

export default Search;
