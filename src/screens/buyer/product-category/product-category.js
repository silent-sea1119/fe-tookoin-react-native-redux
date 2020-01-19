import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
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
    message: '',
  };

  componentDidMount = () => {
    this.getDataFromApi();
  };

  getDataFromApi = async () => {
    const id_category = this.props.navigation.getParam('id');
    let url;
    if (id_category === 4) {
      url = SAPI_URL + '/product/?order=desc&sort=date_created';
    } else {
      url = SAPI_URL + '/product/?id_category=' + id_category;
      // console.log(url);
    }

    console.log(url, 'aslkjdkasjdkljsd')

    const productStoreInit = await this.props.dispatch(fetchProduct(url));
    console.log(productStoreInit, 'init')
    const productStoreFinal = productStoreInit.value.data.data;
    const message = productStoreInit.value.data.msg;

    this.setState({
      message: message,
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
    // console.log(productList);
    return (
      <View style={container}>
        <Search />

        <ScrollView contentContainerStyle={styles.containerScroll}>
          <View style={labelContainerParent}>
            <View style={labelContainer}>
              <Text style={textStyle}>{produk.label}</Text>
            </View>
          </View>
          {productList.length > 0 ? (
            productList.map(item => (
              <View style={body} key={item.id_product}>
                <Card
                  key={item.id_product}
                  id_product={item.id_product}
                  name={item.name_product}
                  price={item.price}
                  unit={item.unit}
                  stock={item.stock}
                  navigation={this.props.navigation}
                />
              </View>
            ))
          ) : this.state.message === 'success' ? (
            <View style={{padding: 160}}>
              <Text style={{color: 'gray'}}> Empty </Text>
            </View>
          ) : (
            <View style={{marginHorizontal: '50%', marginVertical: '50%'}}>
              <ActivityIndicator size="large" color="gray" />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.productReducer,
  };
};

export default connect(mapStateToProps)(ProductCategory);
