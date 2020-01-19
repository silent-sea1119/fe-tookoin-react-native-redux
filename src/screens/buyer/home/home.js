import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Search from '../../../components/search/search.js';
import Footer from '../../../components/footer/footer.js';
import styles from './home.style';
import Category from '../../../components/category/category.js';
import Border from '../../../components/border/border';
import Card from '../../../components/card/card';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {fetchProduct} from '../../../redux/actions/product/productAction';
import {SAPI_URL} from 'react-native-dotenv';

class HomeBuyer extends Component {
  state = {
    productLocalState1: [],
    productLocalState2: [],
    message: '',
  };

  componentDidMount = () => {
    this.getDataFromApi(1);
    this.getDataFromApi(2);
  };
  goToDetail = (lihat_semua_id, lihat_semua_category) => {
    // if (props.id == 1) {
    //   console.log(props.name);
    // } else {
    //   console.log(props.name);
    // }
    this.props.navigation.navigate('ProductCategory', {
      id: lihat_semua_id,
      name: lihat_semua_category,
    });
  };
  getDataFromApi = async id_category => {
    let url =
      SAPI_URL + `/product/?order=asc&id_category=${id_category}&limit=10`;

    const productStoreInit = await this.props.dispatch(fetchProduct(url));
    const productStoreFinal = productStoreInit.value.data.data;
    const message = productStoreInit.value.data.msg;

    if (id_category === 1) {
      console.log('Productstre final 1 ', productStoreFinal);
      this.setState({
        message: message,
        productLocalState1: productStoreFinal,
      });
    } else if (id_category === 2) {
      console.log('Productstre final 2 ', productStoreFinal);
      this.setState({
        message: message,
        productLocalState2: productStoreFinal,
      });
    }
  };
  render() {
    const {
      container,
      imageSlider,
      readMoreImageSlider,
      readMoreImageSliderText,
      dotslider,
      bottomImageSlider,
      scroll,
      category,
      categoryContainer,
      categoryContainerTop,
      categoryContainerBot,
    } = styles;
    return (
      <View style={container}>
        <Search navigation={this.props.navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={imageSlider}>
            <View style={bottomImageSlider}>
              <TouchableOpacity style={readMoreImageSlider}>
                <Text style={readMoreImageSliderText}> Lihat Semuanya</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={category}>
            <Category
              name="Sayuran sugar"
              imgUri={require('../../../assets/icon/carrot.png')}
              navigation={this.props.navigation}
              id={1}
            />
            <Category
              name="Buah Segar"
              imgUri={require('../../../assets/icon/avocado.png')}
              navigation={this.props.navigation}
              id={2}
            />
            <Category
              name="Sumber Karbohidrat"
              imgUri={require('../../../assets/icon/wheat.png')}
              navigation={this.props.navigation}
              id={3}
            />
            <Category
              name="Produk Terbaru"
              imgUri={require('../../../assets/icon/new.png')}
              navigation={this.props.navigation}
              id={4}
            />
            <Category
              name="Promo Spesial"
              imgUri={require('../../../assets/icon/discount.png')}
              navigation={this.props.navigation}
              id={5}
            />
            <Category
              name="Produk Terlaris"
              imgUri={require('../../../assets/icon/star.png')}
              navigation={this.props.navigation}
              id={6}
            />
            <Category
              name="Organik & Premium"
              imgUri={require('../../../assets/icon/winner.png')}
              navigation={this.props.navigation}
              id={7}
            />
            <Category
              name="Katering Sehat"
              imgUri={require('../../../assets/icon/fruits.png')}
              navigation={this.props.navigation}
              id={8}
            />
            <Category
              name="Grosir"
              imgUri={require('../../../assets/icon/shoppingBasket.png')}
              navigation={this.props.navigation}
              id={9}
            />
            <Category
              name="Makanan & Minuman"
              imgUri={require('../../../assets/icon/food.png')}
              navigation={this.props.navigation}
              id={10}
            />
            <Category
              name="Keperluan Dapur"
              imgUri={require('../../../assets/icon/saltShaker.png')}
              navigation={this.props.navigation}
              id={11}
            />
            <Category
              name="Daging & Seafood"
              imgUri={require('../../../assets/icon/fish.png')}
              navigation={this.props.navigation}
              id={12}
            />
            <Category
              name="Olahan Susu & Telurss"
              imgUri={require('../../../assets/icon/egg.png')}
              navigation={this.props.navigation}
              id={13}
            />
          </View>
          <Border />
          <View style={categoryContainer}>
            <View style={categoryContainerTop}>
              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Sayuran Segar
                </Text>
                <Text style={{fontSize: 12}}>Kumpulan Sayur Segar</Text>
              </View>
              <TouchableOpacity
                style={{
                  paddingLeft: 10,
                  justifyContent: 'center',
                }}
                onPress={() => this.goToDetail(1, 'Sayuran Segar')}>
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      color: '#00B444',
                      fontWeight: 'bold',
                      paddingRight: 10,
                    }}>
                    Lihat Semua
                  </Text>
                  <Icon name="chevron-right" size={12} color="#00B444" />
                </View>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={categoryContainerBot}>
                {this.state.productLocalState1.length > 0 ? (
                  this.state.productLocalState1.map(item => (
                    <Card
                      key={item.id_product}
                      id_product={item.id_product}
                      desc_product={item.desc_product}
                      id_category={item.id_category}
                      name_category={item.name_category}
                      name={item.name_product}
                      label={item.label}
                      price={item.price}
                      unit={item.unit}
                      stock={item.stock}
                      navigation={this.props.navigation}
                    />
                  ))
                ) : this.state.message === 'success' ? (
                  <View style={{padding: 160}}>
                    <Text style={{color: 'gray'}}> Empty </Text>
                  </View>
                ) : (
                  <ActivityIndicator size="large" color="gray" />
                )}
              </View>
            </ScrollView>
            <Border />
            <View style={categoryContainer}>
              <View style={categoryContainerTop}>
                <View>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                    Buah Segar
                  </Text>
                  <Text style={{fontSize: 12}}>Kumpulan Buah Segar</Text>
                </View>
                <TouchableOpacity
                  onPress={() => this.goToDetail(2, 'Buah  Segar')}
                  style={{
                    paddingLeft: 10,
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        color: '#00B444',
                        fontWeight: 'bold',
                        paddingRight: 10,
                      }}>
                      Lihat Semua
                    </Text>
                    <Icon name="chevron-right" size={12} color="#00B444" />
                  </View>
                </TouchableOpacity>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={categoryContainerBot}>
                  {this.state.productLocalState2.length > 0 ? (
                    this.state.productLocalState2.map(item => (
                      <Card
                        key={item.id_product}
                        id_product={item.id_product}
                        id_category={item.id_category}
                        name_category={item.name_category}
                        desc_product={item.desc_product}
                        name={item.name_product}
                        label={item.label}
                        price={item.price}
                        unit={item.unit}
                        stock={item.stock}
                        navigation={this.props.navigation}
                      />
                    ))
                  ) : this.state.message === 'success' ? (
                    <View style={{padding: 160}}>
                      <Text style={{color: 'gray'}}> Empty </Text>
                    </View>
                  ) : (
                    <ActivityIndicator size="large" color="gray" />
                  )}
                </View>
              </ScrollView>
              <Border />
            </View>
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

export default connect(mapStateToProps)(HomeBuyer);
// export default HomeBuyer
