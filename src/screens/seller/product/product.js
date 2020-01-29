import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Picker,
  BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import styles from './product.style';
import {TextInput} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import NumericInput from '@wwdrew/react-native-numeric-textinput';
import Axios from 'axios';
import {SAPI_URL} from 'react-native-dotenv';
import AsyncStorage from '@react-native-community/async-storage';
import {showToast} from '../../../components/toast';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama_produk: this.props.navigation.getParam('nama_produk') || '',
      price: this.props.navigation.getParam('price') || '',
      stock: this.props.navigation.getParam('stock') || '',
      desc_produk: this.props.navigation.getParam('desc_produk') || '',
      unit: this.props.navigation.getParam('unit') || '',
      label: this.props.navigation.getParam('label') || '',
      toggleModal: false,
      id_category: this.props.navigation.getParam('id_category') || '',
    };
  }

  handleToggleModal = stat => {
    this.setState({toggleModal: stat});
  };
  handleSubmitProduct = async () => {
    let editOrAdd = this.props.navigation.getParam('title');

    let token = await AsyncStorage.getItem('token');
    let id_seller = await AsyncStorage.getItem('id_user');

    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };
    let data = {
      name_product: this.state.nama_produk,
      desc_product: this.state.desc_produk,
      price: this.state.price,
      id_category: this.state.id_category,
      image: null,
      id_seller: id_seller,
      unit: this.state.unit,
      label: this.state.label,
    };

    if (editOrAdd === 'Add') {
      console.log('Add');
      let url = SAPI_URL + '/product/';
      Axios.post(url, data, config)
        .then(({data}) => {
          if (data.msg === 'success') {
            this.props.navigation.navigate('Etalase');
          } else {
            showToast(`Network error, please try again`, `failed`);
          }
        })
        .catch(err => {
          showToast(`Network error, please try again`, `failed`);
        });
    } else if (editOrAdd === 'Edit') {
      console.log('Edit');
      let url =
        SAPI_URL + '/product/' + this.props.navigation.getParam('id_product');
      console.log(url);
      Axios.patch(url, data, config)
        .then(({data}) => {
          if (data.msg === 'success') {
            this.props.navigation.navigate('Etalase');
          } else {
            showToast(`Network error, please try again`, `failed`);
          }
        })
        .catch(err => {
          console.log(err);
          showToast(`Network error, please try again`, `failed`);
        });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Modal
            isVisible={this.state.toggleModal}
            onModalHide={() => {
              if (this.state.id_category) {
                showToast(`Category Selected`, `success`);
              }
            }}
            onBackdropPress={() => this.handleToggleModal(false)}
            onBackButtonPress={() => this.handleToggleModal(false)}>
            <View style={{flex: 1, position: 'absolute'}}>
              <View
                style={{
                  width: 326,
                  height: 150,
                  backgroundColor: 'white',
                  borderRadius: 15,
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 20,
                    fontFamily: 'AirbnbCerealMedium',
                    marginTop: 20,
                  }}>
                  Select Category
                </Text>
                <View
                  style={{
                    height: 50,
                    width: 291,
                    marginTop: 15,
                    elevation: 2,
                    borderRadius: 10,
                  }}>
                  <Picker
                    selectedValue={this.state.id_category.toString()}
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                    mode={'dropdown'}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({id_category: itemValue})
                    }>
                    <Picker.Item
                      color="#CECECE"
                      label="Select Category"
                      value=""
                    />
                    <Picker.Item label="Sayur Segar" value="1" />
                    <Picker.Item label="Buah Segar" value="2" />
                    <Picker.Item label="Sumber Karbohidrat" value="3" />
                    <Picker.Item label="Organik dan Premium" value="4" />
                    <Picker.Item label="Katering Sehat" value="5" />
                    <Picker.Item label="Makanan dan Minuman" value="6" />
                    <Picker.Item label="Keperluan Dapur" value="7" />
                    <Picker.Item label="Daging dan Seafood" value="8" />
                    <Picker.Item label="Olahan Susu dan Telur" value="9" />
                  </Picker>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <TouchableOpacity
              style={styles.touchBackIcon}
              onPress={() => this.props.navigation.goBack()}>
              <IconMI style={styles.backIcon} name="arrow-back" />
            </TouchableOpacity>
            <Text style={styles.headerText}>
              {this.props.navigation.getParam('title')} Produk
            </Text>
            <TouchableOpacity onPress={() => this.handleSubmitProduct()}>
              <IconMI style={styles.checkIcon} name="check" />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={styles.body}>
            <TouchableOpacity style={styles.imagepicker}>
              <Text style={styles.imagepickerText}>+ Tambah Foto/Video</Text>
            </TouchableOpacity>
            <View style={styles.hr} />
            <TextInput
              style={styles.TextInput}
              placeholder="Nama Produk"
              defaultValue={this.state.nama_produk}
              onChange={e => this.setState({nama_produk: e.nativeEvent.text})}
            />
            <View style={styles.hr} />
            <TextInput
              style={styles.TextInput}
              placeholder="Deskripsi Produk"
              defaultValue={this.state.desc_produk}
              onChange={e => this.setState({desc_produk: e.nativeEvent.text})}
            />
          </View>

          <TouchableOpacity
            style={styles.category}
            onPress={() => this.handleToggleModal(true)}>
            <Icon style={styles.categoryIcon} name="list-ul" />
            <Text style={styles.categoryText}>Kategori</Text>
            <IconMI style={styles.categoryNavigate} name="navigate-next" />
          </TouchableOpacity>

          <View style={styles.body2}>
            <View style={styles.body2Content}>
              <IconMI style={styles.body2Icon} name="attach-money" />
              <Text style={styles.body2Text}>Harga</Text>
              <NumericInput
                value={this.state.price}
                onUpdate={value => {
                  this.setState({price: value});
                }}
                type="decimal"
                decimalPlaces={0}
                style={styles.TextInput2}
                placeholder="Atur Harga"
              />
            </View>
            <View style={styles.hr} />
            <View style={styles.body2Content}>
              <IconMI style={styles.body2Icon} name="layers" />
              <Text style={styles.body2Text}>Stok</Text>
              <NumericInput
                value={this.state.stock}
                onUpdate={value => {
                  this.setState({stock: value});
                }}
                style={styles.TextInput2}
                useGrouping={false}
                placeholder="Atur Stok"
              />
            </View>
            <View style={styles.hr} />
            <View style={styles.body2Content}>
              <Icon style={styles.body2Icon} name="balance-scale" />
              <Text style={styles.body2Text}>Unit</Text>
              <TextInput
                style={styles.TextInput2}
                placeholder="Atur Unit"
                defaultValue={this.state.unit}
                onChange={e => this.setState({unit: e.nativeEvent.text})}
              />
            </View>
            <View style={styles.hr} />
            <View style={styles.body2Content}>
              <Icon style={styles.body2Icon} name="tags" />
              <Text style={styles.body2Text}>Label</Text>
              <TextInput
                style={styles.TextInput2}
                placeholder="Atur Label"
                defaultValue={this.state.label}
                onChange={e => this.setState({label: e.nativeEvent.text})}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AddProduct;
