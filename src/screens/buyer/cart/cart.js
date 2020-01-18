import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import styles from './cart.style';
import Product from '../../../components/cartProduct/cartProduct';
import Footer from '../../../components/footer/footer';

class InboxBuyer extends Component {
  state = {
    data: [1000, 5000, 2000, 5000, 1000, 5000],
    result: 0,
  };
  componentDidMount() {
    let result = this.state.data.reduce((value, element) => value + element);
    this.setState({result: result});
  }
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
              <>
                <Product price={this.state.data[0]} />
                <Product price={this.state.data[1]} />
                <Product price={this.state.data[2]} />
                <Product price={this.state.data[3]} />
                <Product price={this.state.data[4]} />
                <Product price={this.state.data[5]} />
              </>
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
          <View style={buttonCheckout}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Checkout</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default InboxBuyer;
