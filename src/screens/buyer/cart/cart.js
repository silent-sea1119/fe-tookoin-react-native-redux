import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import styles from './cart.style';
import Product from '../../../components/cartProduct/cartProduct';
import Footer from '../../../components/footer/footer';

//redux
import {connect} from 'react-redux';
import {fetchCart} from '../../../redux/actions/cart/cartAction';
import {SAPI_URL} from 'react-native-dotenv';
import AsyncStorage from '@react-native-community/async-storage';

// class InboxBuyer extends Component {
class Cart extends Component {
  state = {
    data: [1000, 5000, 2000, 5000, 1000, 5000],
    // data: [],
    result: 0,
  };

  componentDidMount() {
    let result = this.state.data.reduce((value, element) => value + element);
    this.setState({result: result});
    this.getDataCart();
  }

  getDataCart = async () => {
    let url = SAPI_URL + '/cart';
    // console.log('ini url', url)

    let token = await AsyncStorage.getItem('token');
    // console.log('ini token 555', token);

    let config = {
      headers: {Authorization: 'Bearer ' + token},
    };

    const dataCart = await this.props.dispatch(fetchCart(url, config));
    console.log('your data999', dataCart);
    console.log('your data1111', dataCart.value.data.data[0].price);
    this.setState({
      data: dataCart.value.data.data,
    });
    console.log('your ata 1212', this.state.data[0].price);
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
            Cart asemsgilaxxx
          </Text>
        </View>
        <ScrollView>
          <View style={body}>
            {this.state.data.length > 0 ? (
              this.state.data.map((value, index) => (
                <>
                  {/* <Product price={this.state.data[0].price} /> */}
                  <Product key={index}
                  price={value.price} 
                  name={value.name_product}
                  quantity={value.qty}
                  />
                </>
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
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Checkout')}>
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

export default connect(mapStateToProps)(Cart);
// export default Cart;
