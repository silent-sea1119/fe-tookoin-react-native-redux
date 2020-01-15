import React from 'react';
import {Text, View} from 'react-native';
import Search from '../../../components/search/search.js';
import styles from './home.style';

const HomeBuyer = () => {
  const {body} = styles;
  return (
    <View style={body}>
      <Search />
      <Text>HomeBuyer</Text>
    </View>
  );
};

export default HomeBuyer;
