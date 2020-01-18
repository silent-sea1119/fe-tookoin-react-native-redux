import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import styles from './product.style';
import {TextInput} from 'react-native-gesture-handler';
import NumericInput from '@wwdrew/react-native-numeric-textinput';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama_produk: '',
      price: '',
      stock: '',
      desc_produk: '',
      unit: '',
      label: '',
    };
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
            <Text style={styles.headerText}>
              {this.props.navigation.getParam('title')} Produk
            </Text>
            <TouchableOpacity onPress={() => console.log(this.state)}>
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
              defaultValue={this.props.navigation.getParam('nama_produk') || this.state.nama_produk}
            />
            <View style={styles.hr} />
            <TextInput
              style={styles.TextInput}
              placeholder="Deskripsi Produk"
              defaultValue={this.props.navigation.getParam('desc_produk') || this.state.desc_produk}
            />
          </View>

          <TouchableOpacity style={styles.category}>
            <Icon style={styles.categoryIcon} name="list-ul" />
            <Text style={styles.categoryText}>Kategori</Text>
            <IconMI style={styles.categoryNavigate} name="navigate-next" />
          </TouchableOpacity>

          <View style={styles.body2}>
            <View style={styles.body2Content}>
              <IconMI style={styles.body2Icon} name="attach-money" />
              <Text style={styles.body2Text}>Harga</Text>
              <NumericInput
                value={this.props.navigation.getParam('price')|| this.state.price}
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
                value={this.props.navigation.getParam('stock')|| this.state.stock}
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
                defaultValue={this.props.navigation.getParam('unit') || this.state.unit}
              />
            </View>
            <View style={styles.hr} />
            <View style={styles.body2Content}>
              <Icon style={styles.body2Icon} name="tags" />
              <Text style={styles.body2Text}>Label</Text>
              <TextInput
                style={styles.TextInput2}
                placeholder="Atur Label"
                defaultValue={this.props.navigation.getParam('label') || this.state.label}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AddProduct;
