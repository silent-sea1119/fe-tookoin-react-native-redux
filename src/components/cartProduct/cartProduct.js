import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './cartProduct.style';
import {Icon} from 'react-native-elements';

class cartProduct extends Component {
  state = {quantity: 2};
  handleQuantity = bool => {
    if (bool) {
      this.setState({quantity: this.state.quantity + 1});
    } else if (!bool) {
      this.setState({quantity: this.state.quantity - 1});
    }
  };
  render() {
    const {
      container,
      image,
      desc,
      nameProduct,
      priceProduct,
      unitProduct,
      styleQuantity,
    } = styles;
    return (
      <>
        {this.state.quantity > 0 ? (
          <View style={container}>
            <View style={image}>
              <Text
                style={{
                  paddingVertical: 25,
                  paddingHorizontal: 50,
                  backgroundColor: '#00B444',
                  flex: 2,
                  borderRadius: 10,
                }}></Text>
            </View>
            <View style={desc}>
              <Text style={nameProduct}>{this.props.name}</Text>
              <Text style={{fontSize: 10, marginTop: 10}}>
                Labu siam value 500 gram
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={priceProduct}>Rp {this.props.price}</Text>
                <Text style={unitProduct}> / 500 gram</Text>
              </View>
            </View>
            <View style={styleQuantity}>
              {/* <TouchableOpacity onPress={() => this.handleQuantity(false)}>
                <Icon
                  name="minus-circle"
                  type="font-awesome"
                  size={28}
                  color="#00B444"
                />
              </TouchableOpacity> */}
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginHorizontal: 10,
                }}>
                {/* {this.state.quantity} */}
                {this.props.quantity}

              </Text>
              {/* <TouchableOpacity onPress={() => this.handleQuantity(true)}>
                <Icon
                  name="plus-circle"
                  type="font-awesome"
                  size={28}
                  color="#00B444"
                />
              </TouchableOpacity> */}
            </View>
          </View>
        ) : null}
      </>
    );
  }
}

export default cartProduct;
