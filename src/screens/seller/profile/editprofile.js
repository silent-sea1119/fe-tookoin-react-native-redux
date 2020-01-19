import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import styles from './editprofile.style';
import {TextInput} from 'react-native-gesture-handler';

class EditProfile extends Component {
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
    this.props.navigation.goBack();
    return true;
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <TouchableOpacity style={styles.touchBackIcon}>
              <IconMI style={styles.backIcon} name="arrow-back" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Ubah Profile</Text>
            <TouchableOpacity>
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
          <TextInput style={styles.bodyInput} placeholder="Atur Nama" />
        </View>
        <View style={styles.hr} />
        <View style={styles.body}>
          <Text style={styles.bodyText}>Email</Text>
          <TextInput style={styles.bodyInput} placeholder="Atur Email" />
        </View>
        <View style={styles.hr} />
        <View style={styles.body}>
          <Text style={styles.bodyText}>Alamat</Text>
          <TextInput
            multiline={true}
            style={styles.bodyInputMulti}
            placeholder="Atur Alamat"
          />
        </View>
        <View style={styles.hr} />
        <View style={styles.body}>
          <Text style={styles.bodyText}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.bodyInput}
            placeholder="Atur Password"
          />
        </View>
      </View>
    );
  }
}

export default EditProfile;
