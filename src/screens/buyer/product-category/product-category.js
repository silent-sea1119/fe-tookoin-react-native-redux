import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import styles from './product-category.style';
import Footer from '../../../components/footer/footer';
import Search from '../../../components/search/search';
import Card from '../../../components/card/card';

class ProductCategory extends Component {
  render() {
    const {
      container,
      header,
      body,
      labelContainer,
      containerScroll,
      textStyle,
      labelContainerParent,
    } = styles;
    const produk = {
      label: 'kacang merah',
    };
    return (
      <View style={container}>
        <Search />
        {/* <ScrollView> */}
        <ScrollView contentContainerStyle={styles.containerScroll}>
          <View style={labelContainerParent}>
            <View style={labelContainer}>
              <Text style={textStyle}>{produk.label}</Text>
            </View>
          </View>

          
          <View style={body}>
            <Card />
          </View>

          <View style={body}>
            <Card />
          </View>

          <View style={body}>
            <Card />
          </View>

          <View style={body}>
            <Card />
          </View>

          <View style={body}>
            <Card />
          </View>

          <View style={body}>
            <Card />
          </View>

          <View style={body}>
            <Card />
          </View>

          <View style={body}>
            <Card />
          </View>
         
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

export default ProductCategory;
