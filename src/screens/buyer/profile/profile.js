import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import styles from './profile.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Border from '../../../components/border/border';
import AccountOption from '../../../components/accountOption/accountOption';
import Footer from '../../../components/footer/footer';

class ProfileBuyer extends Component {
  state = {name: 'Larklane 7'};
  render() {
    const {
      container,
      header,
      headerText,
      body,
      username,
      headerUsername,
      headerAvatar,
      headerCode,
      footer,
    } = styles;
    return (
      <View style={container}>
        <View style={header}>
          <View style={headerText}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>Account</Text>
          </View>
          <View style={headerUsername}>
            <Image
              style={headerAvatar}
              source={require('../../../assets/images/Avatar.png')}
            />
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              {this.state.name}
            </Text>
          </View>
          <View style={headerCode}>
            <View
              style={{
                width: '50%',
                padding: 15,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="users" size={24} color="#DADADA" />
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 12}}>My Referral Code</Text>
                <TouchableOpacity>
                  <Text style={{fontWeight: 'bold', color: '#62BA67'}}>
                    G3B6MRL0R
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{height: 40, borderColor: '#F5F5F6', borderWidth: 1}}
            />
            <View
              style={{
                width: '50%',
                padding: 15,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="trophy" size={24} color="#DADADA" />
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 12}}>My Tooko Point</Text>
                <TouchableOpacity>
                  <Text style={{fontWeight: 'bold', color: '#62BA67'}}>
                    0 Point
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <Border />
        <View style={body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <AccountOption title="Masukkan Code Referral" />
            <AccountOption title="Voucher Saya" />
            <AccountOption
              title="Alamat Saya"
              navigation={this.props.navigation}
            />
            <AccountOption title="Blog" />
            <AccountOption title="Privasi dan Kebijakan" />
            <AccountOption title="Bantuan" />
            <AccountOption
              color="red"
              title="Keluar"
              
              navigation={this.props.navigation}
            />
            <View
              style={{
                padding: 15,
                alignItems: 'center',
                backgroundColor: '#F5F5F6',
              }}>
              <Text style={{fontSize: 12, color: 'gray'}}>App Version 0.1</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default ProfileBuyer;
