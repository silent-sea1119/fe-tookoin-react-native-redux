import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import styles from './home.style';
import AsyncStorage from '@react-native-community/async-storage';
import avatar from '../../../assets/images/Avatar.png';

class HomeSeller extends Component {
  state = {
    name_user: '',
  };

  handleGetItem = async () => {
    let name_user = await AsyncStorage.getItem('name_user');
    this.setState({name_user: name_user});
  };

  handleClick = () => {
    this.props.navigation.navigate('Login');
  };
  componentDidMount() {
    this.handleGetItem();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} key="header">
          <View style={styles.headerIcon}>
            <TouchableOpacity style={styles.touchBackIcon}>
              <IconMI style={styles.backIcon} name="arrow-back" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('EditProfile')}>
              <Icon style={styles.gearIcon} name="cog" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.chatIcon} name="comments" />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerProfile}>
            <Image source={avatar} style={styles.avatar} />
            <Text style={styles.profileName}>{this.state.name_user}</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.bodyHeader}>
              <IconMI name="store" style={styles.storeIcon} />
              <Text style={styles.storeName}>Penjualan Saya</Text>
              <TouchableOpacity style={styles.detailMenu}>
                <Text style={styles.detail}>Lihat Riwayat Penjualan</Text>
                <IconMI style={styles.detailIcon} name="navigate-next" />
              </TouchableOpacity>
            </View>
            <View style={styles.hr} />
            <View style={styles.bodyBody}>
              <TouchableOpacity style={styles.bodyFlex}>
                <IconMI style={styles.bodyIcon} name="local-shipping" />
                <Text style={styles.bodyText}>Perlu Dikirim</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bodyFlex}>
                <IconMI style={styles.bodyIcon} name="highlight-off" />
                <Text style={styles.bodyText}>Dibatalkan</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bodyFlex}>
                <IconMI style={styles.bodyIcon} name="sync" />
                <Text style={styles.bodyText}>Pengembalian</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bodyFlex}>
                <Icon style={styles.bodyIcon} name="ellipsis-h" />
                <Text style={styles.bodyText}>Lainnya</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.body2}
            onPress={() => this.props.navigation.navigate('AddProduct',{title: 'Add'})}>
            <IconMI style={styles.addIcon} name="add-circle-outline" />
            <Text style={styles.addText}>Tambah Produk Baru</Text>
            <IconMI style={styles.detailAdd} name="navigate-next" />
          </TouchableOpacity>
          <View style={styles.body3}>
            <TouchableOpacity style={styles.body3Content}>
              <IconMI
                style={styles.body3Icon}
                color="#f67533"
                name="local-atm"
              />
              <Text style={styles.addText}>Saldo Penjual</Text>
              <IconMI style={styles.detailAdd} name="navigate-next" />
            </TouchableOpacity>
            <View style={styles.hr2} />
            <TouchableOpacity style={styles.body3Content}>
              <IconMI style={styles.body3Icon} color="#ebc934" name="input" />
              <Text style={styles.addText}>Penghasilan Saya</Text>
              <IconMI style={styles.detailAdd} name="navigate-next" />
            </TouchableOpacity>
            <View style={styles.hr2} />
            <TouchableOpacity style={styles.body3Content}>
              <IconMI
                style={styles.body3Icon}
                color="#314fe8"
                name="local-shipping"
              />
              <Text style={styles.addText}>Jasa Kirim Saya</Text>
              <IconMI style={styles.detailAdd} name="navigate-next" />
            </TouchableOpacity>
            <View style={styles.hr2} />
            <TouchableOpacity style={styles.body3Content}>
              <IconMI style={styles.body3Icon} color="#31e865" name="grade" />
              <Text style={styles.addText}>Lihat Penilaian Toko</Text>
              <IconMI style={styles.detailAdd} name="navigate-next" />
            </TouchableOpacity>
            <View style={styles.hr2} />
            <TouchableOpacity style={styles.body3Content}>
              <Icon style={styles.body3Icon} color="#ebc934" name="expand" />
              <Text style={styles.addText}>Performa Toko</Text>
              <IconMI style={styles.detailAdd} name="navigate-next" />
            </TouchableOpacity>
            <View style={styles.hr2} />
            <TouchableOpacity style={styles.body3Content}>
              <IconMI
                style={styles.body3Icon}
                color="#31e865"
                name="help-outline"
              />
              <Text style={styles.addText}>Pusat Bantuan</Text>
              <IconMI style={styles.detailAdd} name="navigate-next" />
            </TouchableOpacity>
            <View style={styles.hr2} />
            <TouchableOpacity
              style={styles.body3Content}
              onPress={() => this.handleClick()}>
              <IconMI
                style={styles.body3Icon}
                color="#314fe8"
                name="exit-to-app"
              />
              <Text
                style={{marginTop: 20, fontSize: 14, flex: 1, color: 'red'}}>
                Keluar
              </Text>
              <IconMI style={styles.detailAdd} name="navigate-next" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.body4}>
            <Text style={styles.body4Text}>Lihat Toko Saya</Text>
            <IconMI style={styles.detailAdd} name="navigate-next" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.body5}>
            <Text style={styles.body4Text}>0 Produk</Text>
            <IconMI style={styles.detailAdd} name="navigate-next" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.body6}>
            <Icon name="gift" style={styles.body6Icon} />
            <Text style={styles.body6Text}>Tampilkan Semua Produk</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default HomeSeller;
