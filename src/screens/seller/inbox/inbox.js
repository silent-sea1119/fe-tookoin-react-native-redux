import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image, BackHandler} from 'react-native';
import styles from './inbox.style';
import Footer from '../../../components/footer/footer';

class InboxBuyer extends Component {
  componentDidMount() {
    //Buat mengecek tombol back fisik ditekan
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
  }
  //Buat mengecek tombol back fisik ditekan

  componentWillUnmount() {
    this.backHandler.remove();
  }

    //Buat mengecek tombol back fisik ditekan
  handleBackPress = () => {
    let {routeName, key} = this.props.navigation.state;
    this.props.navigation.goBack()
    return true;
  };
  render() {
    const {container, header, body} = styles;
    return (
      <View style={container}>
        <View style={header}>
          <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
            Inbox
          </Text>
        </View>
        <ScrollView>
          <View style={body}>
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
              Inbox is Empty
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default InboxBuyer;
