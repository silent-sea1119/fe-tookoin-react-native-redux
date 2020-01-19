import React, {useState, Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './card.style';
import {Icon} from 'react-native-elements';

class Card extends Component {
  constructor() {
    super();
    this.state = {Quantity: 0};
  }
  render() {
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

    const goToDetail = () => {
      this.props.navigation.push('DetailProdukBuyer', {
        id_product: this.props.id_product,
        desc_product: this.props.desc_product,
        id_category: this.props.id_category,
        name: this.props.name,
        label: this.props.label,
        unit: this.props.unit,
        price: this.props.price,
        quantity: this.state.Quantity,
        name_category: this.props.name_category,
      });
    };
    const handleAddQuantity = () => {
      this.setState({Quantity: this.state.Quantity + 1});
    };
    const handleQuantity = bool => {
      if (bool) {
        this.setState({Quantity: this.state.Quantity + 1});
      } else if (!bool) {
        this.setState({Quantity: this.state.Quantity - 1});
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
              {this.props.label}
            </Text>
          </View>
          <Text style={name}>{this.props.name}</Text>
          <Text style={{color: 'gray', fontSize: 12}}>
            Imperfect: ukuran buah
          </Text>
          <View style={price}>
            <Text style={priceText}>Rp {this.props.price}</Text>
            <Text style={unit}> / {this.props.unit}</Text>
          </View>
          {this.state.Quantity > 0 ? (
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
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginHorizontal: 10,
                }}>
                {this.state.Quantity}
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
  }
}

export default Card;
