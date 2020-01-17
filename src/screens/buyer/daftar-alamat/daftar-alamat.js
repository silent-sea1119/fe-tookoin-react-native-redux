import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
  Modal,
  Alert,
  Picker,
  TextInput,
} from 'react-native';
import styles from './daftar-alamat.style';
import Footer from '../../../components/footer/footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'native-base';

import RadioButton from '../../../components/radioButton/radioButton';
// import AssetExample from '../../../components/radioButton/assetExample';

class DaftarAlamatBuyer extends Component {
  state = {
    nama: '',
    email: '',
    alamat: '',
    kontak: '',

    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onChangeText = (inputName, inputValue) => {
    this.setState(state => ({
      ...state,
      [inputName]: inputValue,
    }));
    // console.log(this.state)
  };

  onTouchHL() {
    console.log('touch-touch');
    // alert('You tapped the button!')
  }

  render() {
    const {
      container,
      header,
      body,
      bodyA,
      textInput,
      textStyle,
      dropdown,
      footerSimpan,
      buttonSimpan,
      modalScrollView,
      modalScrollViewA,
      modalScrollViewText,
      modalforButton,
    } = styles;
    const value = this.state;

    const options = [
      {
        key: 'pay',
        text: 'Jogja',
      },
      {
        key: 'performance',
        text: 'Bintaro',
      },
      {
        key: 'aToZ',
        text: 'Bogor',
      },
      {
        key: 'zToA',
        text: 'Jakarta',
      },
    ];

    return (
      <View style={container}>
        <View style={header}>
          <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
            Ubah Alamat
          </Text>
        </View>
        <ScrollView>
          <View style={body}>
            <Text style={{fontSize: 24, color: 'gray'}}>
              Mau dikirim kemana pesanan kamu?
            </Text>

            <View style={bodyA}>
              <Text style={textStyle}>Nama Penerima</Text>
              <TextInput
                style={textInput}
                onChangeText={text => this.onChangeText('nama', text)}
                value={value.nama}
              />

              <Text style={textStyle}>Email</Text>
              <TextInput
                style={textInput}
                onChangeText={text => this.onChangeText('email', text)}
                value={value.email}
              />

              <Text style={textStyle}>Nomor Hp Penerima</Text>
              <View style={{flexDirection: 'row'}}>
                <Text>+62</Text>
                <TextInput
                  style={textInput}
                  keyboardType="number-pad"
                  onChangeText={text => this.onChangeText('kontak', text)}
                  value={value.kontak}
                />
              </View>

              <Text style={textStyle}>Alamat</Text>
              <TextInput
                style={textInput}
                multiline={true}
                numberOfLines={3}
                onChangeText={text => this.onChangeText('alamat', text)}
                value={value.alamat}
              />

              <Text style={textStyle}>Provinsi</Text>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(true);
                }}>
                <View style={dropdown}>
                  <Text></Text>
                  <Icon name="chevron-down" size={14} color="#62BA67" />
                </View>
              </TouchableHighlight>

              <Text style={textStyle}>Kota / Kabupaten</Text>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(true);
                }}>
                <View style={dropdown}>
                  <Text></Text>
                  <Icon name="chevron-down" size={14} color="#62BA67" />
                </View>
              </TouchableHighlight>

              <Text style={textStyle}>Kecamatan</Text>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(true);
                }}>
                <View style={dropdown}>
                  <Text></Text>
                  <Icon name="chevron-down" size={14} color="#62BA67" />
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>

        <View style={footerSimpan}>
          <Button style={buttonSimpan}>
            <Text style={{color: 'white'}}>SIMPAN</Text>
          </Button>
        </View>

        {/* <Footer /> */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <ScrollView style={modalScrollView}>
            <View style={modalScrollViewA}>
              <Text style={modalScrollViewText}>Pilih Kota</Text>
              <View style={modalforButton}>
                <RadioButton options={options} />
              </View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <View
                  style={{
                    // height: 222,
                    width: 100,
                    // backgroundColor: 'red',
                  }}>
                  <Button
                    small
                    style={styles.buttonChild22}
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Text style={styles.textChild22}>Pilih</Text>
                  </Button>
                </View>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </Modal>
      </View>
    );
  }
}

export default DaftarAlamatBuyer;
