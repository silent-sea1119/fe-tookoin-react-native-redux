import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import styles from './editprofile.style';
import {TextInput} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {SAPI_URL} from 'react-native-dotenv';
import Axios from 'axios';

class EditProfileBuyer extends Component {
  state = {
    email: '',
    name_user: '',
    token: '',
    address: '',
    phone: '',
    id_user: '',
  };

  handleSumbitDataUser = () => {
    let url = SAPI_URL + '/profile/update';
    let data = {
      name_user: this.state.name_user,
      email: this.state.email,
      address: this.state.address,
    };
    let config = {
      headers: {Authorization: 'Bearer ' + this.state.token},
    };
    Axios.patch(url, data, config)
      .then(res => {
        if (res.data.msg === 'SUCCESS') {
          this.props.navigation.navigate('Profile');
          AsyncStorage.setItem('name_user', this.state.name_user);
          AsyncStorage.setItem('token', this.state.token);
          AsyncStorage.setItem('email', this.state.email);
          AsyncStorage.setItem('address', this.state.address);
          AsyncStorage.setItem('phone', this.state.phone);
        } else {
          Alert.alert('ERROR', 'Something Went Wrong');
        }
      })
      .catch(err => console.log(err));
  };

  handleDataUser = async () => {
    let email = await AsyncStorage.getItem('email');
    let name_user = await AsyncStorage.getItem('name_user');
    let token = await AsyncStorage.getItem('token');
    let address = await AsyncStorage.getItem('address');
    let phone = (await AsyncStorage.getItem('phone')) || '+62';
    let id_user = await AsyncStorage.getItem('id_user');
    console.log('pake', token);
    this.setState({
      email: email,
      name_user: name_user,
      token: token,
      address: address,
      phone: phone,
      id_user: id_user,
    });
  };
  componentDidMount() {
    this.handleDataUser();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <TouchableOpacity
              style={styles.touchBackIcon}
              onPress={() => this.props.navigation.goBack()}>
              <IconMI style={styles.backIcon} name="arrow-back" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Ubah Profile</Text>
            <TouchableOpacity onPress={() => this.handleSumbitDataUser()}>
              <IconMI style={styles.checkIcon} name="check" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.picture}>
            <View style={styles.pictureCircle}>
              <IconMI style={styles.pictureIcon} name="person-outline" />
              <Text style={styles.pictureText}>Ubah</Text>
            </View>
          </View>
          <View style={styles.pictureFooter1}>
            <View style={styles.pictureFooter}>
              <Text style={styles.pictureFooterText}>Tekan untuk Ubah</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.body}>
          <Text style={styles.bodyText}>Nama</Text>
          <TextInput
            style={styles.bodyInput}
            defaultValue={this.state.name_user}
            placeholder="Atur Nama"
            onChange={e => this.setState({name_user: e.nativeEvent.text})}
          />
        </View>
        <View style={styles.hr} />
        <View style={styles.body}>
          <Text style={styles.bodyText}>Email</Text>
          <TextInput
            style={styles.bodyInput}
            defaultValue={this.state.email}
            placeholder="Atur Email"
            onChange={e => this.setState({email: e.nativeEvent.text})}
          />
        </View>
        <View style={styles.hr} />
        <View style={styles.body}>
          <Text style={styles.bodyText}>Alamat</Text>
          <TextInput
            multiline={true}
            defaultValue={this.state.address}
            style={styles.bodyInputMulti}
            placeholder="Atur Alamat"
            onChange={e => this.setState({address: e.nativeEvent.text})}
          />
        </View>
        <View style={styles.hr} />
        <View style={styles.body}>
          <Text style={styles.bodyText}>Phone</Text>
          <TextInput
            defaultValue={this.state.phone || '+62'}
            style={styles.bodyInput}
            placeholder="Phone"
            onChange={e => this.setState({phone: e.nativeEvent.text})}
          />
        </View>
      </View>
    );
  }
}

export default EditProfileBuyer;
