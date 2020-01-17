import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import styles from './product-category.style';
import Footer from '../../../components/footer/footer';
import Search from '../../../components/search/search';
import Card from '../../../components/card/card';

//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchProduct} from '../../../redux/actions/product/productAction';

import {API_URL} from 'react-native-dotenv';

// const URL = 'http://192.168.6.139:8000/product';
// http://192.168.6.139:8000/product

class ProductCategory extends Component {
  state = {
    productLocalState: [],
  };

  componentDidMount = () => {
    this.getDataFromApi();
  };

  getDataFromApi = async () => {
    console.log(this.props.navigation.getParam('id'), 'your-id-props');
    const id = this.props.navigation.getParam('id');
    const url = API_URL + '/product/?id_category=' + id;
    console.log(url, 'your-url');
    const product = await this.props.fetchProduct(url);
    // console.log(product.value.data.data, 'great')
    // console.log(this.props.product)
  };

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
      label: this.props.navigation.getParam('name'),
    };

    // console.log(this.props.navigation.getParam('name'), ' sudah gila ');
    // console.log(this.props.product);
    const productList = this.props.product.data.data;
    console.log(productList, '8989898');

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

          {productList.map(item => (
            <View style={body}>
              <Card
                name={item.name_product}
                price={item.price}
                unit={item.stock}
              />
            </View>
          ))}
        </ScrollView>
        {/* <Footer /> */}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.productReducer.product,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchProduct,
    },
    dispatch,
  );
};

// export default ProductCategory;
export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory);
