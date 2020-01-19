import React, {Component} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import Search from '../../../components/search/search';
import styles from './searchScreen.style';
import Card from '../../../components/card/card';
import {connect} from 'react-redux';
import {fetchProduct} from '../../../redux/actions/product/productAction';
import {SAPI_URL} from 'react-native-dotenv';

class SearchScreen extends Component {
  state = {
    productLocalState: [],
    message: '',
  };

  componentDidMount = () => {
    this.getDataFromApi();
  };

  getDataFromApi = async () => {
    let name_product = this.props.navigation.getParam('searchText') || '';
    let url =
      SAPI_URL + `/product/?order=asc&name_product=${name_product}&limit=10`;

    const productStoreInit = await this.props.dispatch(fetchProduct(url));
    const productStoreFinal = productStoreInit.value.data.data;
    const message = productStoreInit.value.data.msg;
    console.log(productStoreFinal);

    this.setState({
      message: message,
      productLocalState: productStoreFinal,
    });
  };

  render() {
    const {container, containerResult, body} = styles;
    return (
      <View style={container}>
        <Search
          searchText={this.props.navigation.getParam('searchText') || ''}
          navigation={this.props.navigation}
        />

        <ScrollView>
          <View style={containerResult}>
            {this.state.productLocalState.length > 0 ? (
              this.state.productLocalState.map(item => (
                <View style={body} key={item.id_product}>
                  <Card
                    key={item.id_product}
                    id_product={item.id_product}
                    label={item.label}
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
          </View>
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

export default connect(mapStateToProps)(SearchScreen);
