import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './category.style';

const category = props => {
  const goToDetail = () => {
    // if (props.id == 1) {
    //   console.log(props.name);
    // } else {
    //   console.log(props.name);
    // }
    props.navigation.navigate('ProductCategory', {
      id: props.id,
      name: props.name,
    });
  };



  const {container, text, image} = styles;
  return (
    <TouchableOpacity onPress={() => goToDetail()}>
      <View style={container}>
        <Image style={image} source={props.imgUri} />
        <Text style={text}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default category;
