import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  BackHandler,
} from 'react-native';
import styles from './inbox.style';
import Footer from '../../../components/footer/footer';
import {withNavigationFocus} from 'react-navigation';

class InboxBuyer extends Component {
  componentDidUpdate = async prevProps => {
    if (prevProps.isFocused !== this.props.isFocused) {
      if (await this.props.isFocused) {
        console.log('Update Data')
      }
      // Call any action
    }
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

export default withNavigationFocus(InboxBuyer);
