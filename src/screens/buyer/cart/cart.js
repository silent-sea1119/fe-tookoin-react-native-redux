import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import styles from './cart.style';
import Product from '../../../components/cartProduct/cartProduct';
import Footer from '../../../components/footer/footer';
import Axios from 'axios';

//redux
import {connect} from 'react-redux';
import {fetchCart} from '../../../redux/actions/cart/cartAction';
import {SAPI_URL} from 'react-native-dotenv';
import AsyncStorage from '@react-native-community/async-storage';
import {withNavigationFocus} from 'react-navigation';

// class InboxBuyer extends Component {
class Cart extends Component {
  state = {
    data: [0],
    // data: [],
    result: 0,
  };

  componentDidMount() {
    this.getDataCart();
  }

  getDataCart = async () => {
    let url = SAPI_URL + '/cart';
    // console.log('ini url', url)

    let token = await AsyncStorage.getItem('token');
    console.log('ini token 555', token);
    let config = {
      headers: {Authorization: 'Bearer ' + token},
    };

    const dataCart = await this.props.dispatch(fetchCart(url, config));
    const arrayTotal = [];
    console.log('your data1111', dataCart.value.data.data[0].price);
    for (let i = 0; i < dataCart.value.data.data.length; i++) {
      arrayTotal.push(dataCart.value.data.data[i].subtotal);
    }
    let total = arrayTotal.reduce((a, b) => a + b, 0);
    this.setState({
      data: dataCart.value.data.data,
      result: total,
    });
  };
  componentDidUpdate = async prevProps => {
    if (prevProps.isFocused !== this.props.isFocused) {
      if (await this.props.isFocused) {
        this.getDataCart();
      }
      // Call any action
    }
  };

  handleCheckout = async () => {
    let token = await AsyncStorage.getItem('token');
    let config = {
      headers: {Authorization: 'Bearer ' + token},
    };

    Axios.post(
      'http://3.80.150.111:8000/cart/checkout/store/' +
        this.state.data[0].id_seller,
      null,
      config,
    )
      .then(response => {
        this.props.navigation.navigate('Checkout', {
          item: response.data.data.insertId,
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const {
      container,
      header,
      body,
      totalPrice,
      totalProduct,
      buttonCheckout,
    } = styles;
    return (
      <View style={container}>
        <View style={header}>
          <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
            Cart
          </Text>
        </View>
        <ScrollView>
          <View style={body}>
            {this.state.data.length > 0 ? (
              this.state.data.map((value, index) => (
                <View key={index}>
                  {/* <Product price={this.state.data[0].price} /> */}
                  <Product
                    key={index}
                    price={value.price}
                    name={value.name_product}
                    quantity={value.qty}
                  />
                </View>
              ))
            ) : (
              <>
                <Image
                  style={{width: '60%', resizeMode: 'contain'}}
                  source={require('../../../assets/images/Inbox.png')}
                />
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    fontWeight: 'bold',
                    marginTop: -50,
                    color: 'gray',
                  }}>
                  Cart is Empty
                </Text>
              </>
            )}
          </View>
        </ScrollView>
        <View style={totalProduct}>
          <View style={totalPrice}>
            <Text style={{fontWeight: 'bold'}}>Total Price</Text>
            <Text style={{fontWeight: 'bold', color: '#00B444', fontSize: 18}}>
              Rp {this.state.result}
            </Text>
          </View>
          <TouchableOpacity onPress={this.handleCheckout}>
            <View style={buttonCheckout}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Checkout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducer,
  };
};

export default withNavigationFocus(connect(mapStateToProps)(Cart));
// export default Cart;
