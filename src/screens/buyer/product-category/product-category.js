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
import {SAPI_URL} from 'react-native-dotenv';

class ProductCategory extends Component {
  state = {
    productLocalState: [],
  };

  componentDidMount = () => {
    this.getDataFromApi();
  };

  getDataFromApi = async () => {
    const id_category = this.props.navigation.getParam('id');
    const url = SAPI_URL + '/product/?id_category=' + id_category;
    console.log(url);

    const productStoreInit = await this.props.dispatch(fetchProduct(url));
    const productStoreFinal = productStoreInit.value.data.data;

    this.setState({
      productLocalState: productStoreFinal,
    });
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
    const produk = {label: this.props.navigation.getParam('name')};
    const productList = this.state.productLocalState;
    return (
      <View style={container}>
        <Search />
        <Search />
        <Search />
        <Search />

        <ScrollView contentContainerStyle={styles.containerScroll}>
          <View style={labelContainerParent}>
            <View style={labelContainer}>
              <Text style={textStyle}>{produk.label}</Text>
            </View>
          </View>

          {productList.map(item => (
            <View style={body}>
              <Card
                 id_product={item.id_product}
                 id_category={item.id_category}
                 name={item.name_product}
                 price={item.price}
                 unit={item.unit}
                 name_category={item.name_category}
                 navigation={this.props.navigation}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product,
  };
};

export default connect(mapStateToProps)(ProductCategory);
