import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './card.style';
import {Icon} from 'react-native-elements';

const Card = props => {
  const {
    container,
    name,
    image,
    price,
    priceText,
    unit,
    beli,
    kuantity,
  } = styles;
  const [Quantity, setQuantity] = useState(0);

  const goToDetail = () => {
    props.navigation.push('DetailProdukBuyer', {
      name: props.name,
      label: props.label,
      unit: props.unit,
      price: props.price,
      quantity: Quantity,
    });
  };
  const handleAddQuantity = () => {
    setQuantity(Quantity + 1);
  };
  const handleQuantity = bool => {
    if (bool) {
      setQuantity(Quantity + 1);
    } else if (!bool) {
      setQuantity(Quantity - 1);
    }
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
        {Quantity > 0 ? (
          <View style={kuantity}>
            <TouchableOpacity onPress={() => handleQuantity(false)}>
              <Icon
                name="minus-circle"
                type="font-awesome"
                size={28}
                color="#00B444"
              />
            </TouchableOpacity>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', marginHorizontal: 10}}>
              {Quantity}
            </Text>
            <TouchableOpacity onPress={() => handleQuantity(true)}>
              <Icon
                name="plus-circle"
                type="font-awesome"
                size={28}
                color="#00B444"
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={() => handleAddQuantity()}>
            <View style={beli}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>Beli</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
