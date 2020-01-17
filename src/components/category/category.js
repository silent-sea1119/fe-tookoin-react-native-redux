import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './category.style';

const category = props => {
  const {container, text, image} = styles;
  return (
    <TouchableOpacity>
      <View style={container}>
        <Image style={image} source={props.imgUri} />
        <Text style={text}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default category;
