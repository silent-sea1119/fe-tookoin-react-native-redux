import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './card.style';

const category = props => {
  const {container, name, image, price, priceText, unit, beli} = styles;
  return (
    <TouchableOpacity>
      <View style={container}>
        <View style={image}>
          <Text
            style={{
              fontSize: 10,
              marginTop: 20,
              padding: 5,
              backgroundColor: 'gray',
              color: 'white',
            }}>
            {props.label}
          </Text>
        </View>
        <Text style={name}>{props.name}</Text>
        <Text style={{color: 'gray', fontSize: 12}}>
          Imperfect: ukuran buah
        </Text>
        <View style={price}>
          <Text style={priceText}>{props.price}</Text>
          <Text style={unit}> / {props.unit}</Text>
        </View>
        <View style={beli}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>Beli</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default category;
