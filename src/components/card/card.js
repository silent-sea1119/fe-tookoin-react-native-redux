import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './card.style';

const Card = props => {
  const {container, name, image, price, priceText, unit, beli} = styles;
  const goToDetail = () => {
    props.navigation.push('DetailProdukBuyer', {
      name: props.name,
      label: props.label,
      unit: props.unit,
      price: props.price,
    });
  };
  return (
    <TouchableOpacity onPress={() => goToDetail()}>
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
          <Text style={priceText}>Rp {props.price}</Text>
          <Text style={unit}> / {props.unit}</Text>
        </View>
        <TouchableOpacity>
          <View style={beli}>
            <Text style={{fontWeight: 'bold', color: 'white'}}>Beli</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
