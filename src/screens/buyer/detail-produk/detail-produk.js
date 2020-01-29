//lib
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Text, Button, Tab, Thumbnail, Tabs} from 'native-base';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import {useHeaderHeight} from 'react-navigation-stack';
import * as Animatable from 'react-native-animatable';
import {BorderlessButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

//redux
import {connect} from 'react-redux';
import {nyokot} from '../../../redux/actions/product/productAction';
import {SAPI_URL} from 'react-native-dotenv';
import store from '../../../redux/store';

// import tvShowContent from '../../../assets/tvShowContent';
const imageUri = require('../../../assets/static-image/monster-egg.png');

import styles from './detail-produk.styles';
import Card from '../../../components/card/card';

const MIN_HEIGHT = useHeaderHeight.HEIGHT;
const MAX_HEIGHT = 250;

class DetailProdukBuyer extends Component {
  constructor() {
    super();
    this.state = {showNavTitle: false, quantity: 0, detailProdukLocalState: []};
  }

  componentDidMount() {
    if (this.props.navigation.getParam('quantity') > 0) {
      this.setState({quantity: this.props.navigation.getParam('quantity')});
    }
    this.getDataFromApi();
  }

  getDataFromApi = async () => {
    let JAM = await this.props.dispatch(nyokot());

    const id_productGet = this.props.navigation.getParam('id_product');
    const arrProductGet = this.props.productDetail.product.data.data;
    const productGet = arrProductGet.find(x => x.id_product == id_productGet);
    console.log('JAMAMAMAM ',JAM)
    this.setState({
      detailProdukLocalState: productGet,
    });
  };

  render() {
    // const produk = this.state.detailProdukLocalState;
    // console.log(this.props.productDetail, 'ioppoipoipoip');
    // console.log('RENDER', this.state.detailProdukLocalState.desc_product)
    const data = {
      title: this.props.navigation.getParam('name'),
      dose: `1 pcs (${this.props.navigation.getParam('unit')})`,
      price: this.props.navigation.getParam('price'),
      producer: 'Mawang',
      producerDesc:
        'Mawang adalah seorang musisi asal Bandung yang belakangan ini sedang viral. Lagunya yang berjudul Kasih Sayang Kepada Orang Tua',
      unit: '1 pcs',
      description:
        'Ultra Milk Rasa cocok untuk dikonsumsi sehari-hari dan juga diminum sehabis beraktivitas atau berolahraga untuk memenuhi kembali cairan tubuh dan membantu pembentukan tubuh. Produk ini baik untuk diminum anak-anak berumur 1 tahun ke atas, apalagi ditambah varian rasa dari bahan alami yang mengandung banyak nutrisi alami yang dibutuhkan tubuh, terutama bagi remaja yang sedang dalam masa pertumbuhan.',
      label: this.props.navigation.getParam('label'),
      label2: 'Produk Lokal',
      healthAndBenefit:
        'Dalam tiap 100 gram susu kuda liar menghasilkan 44 kalori, yang lebih sedikit ketimbang susu sapi yang sebesar 64 kalori sehingga membuat orang yang minum susu kuda tidak cepat gemuk.',
      prepAndStorage:
        'Kocok dahulu sebelum diminum jangan disimpan di dalam freezer dan jangan dimasak di atas panas api langsung. Kedua tindakan tersebut dapat menghilangkan khasiat susu kuda sumbawa asli',
    };

    const handleAddQuantity = () => {
      this.setState({quantity: this.state.quantity + 1});
    };

    const handleQuantity = bool => {
      if (bool) {
        this.setState({quantity: this.state.quantity + 1});
      } else if (!bool) {
        this.setState({quantity: this.state.quantity - 1});
      }
    };

    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" />
        <HeaderImageScrollView
          maxHeight={MAX_HEIGHT}
          minHeight={MIN_HEIGHT}
          maxOverlayOpacity={0.6}
          minOverlayOpacity={0.3}
          fadeOutForeground
          renderHeader={() => <Image source={imageUri} style={styles2.image} />}
          renderFixedForeground={() => (
            <Animatable.View
              style={styles2.navTitleView}
              ref={navTitleView => {
                this.navTitleView = navTitleView;
              }}>
              <Text style={styles.navTitle}>{data.title}</Text>
            </Animatable.View>
          )}
          renderForeground={() => (
            <View style={styles.titleContainer}>
              <Text style={styles.imageTitle}></Text>
            </View>
          )}>
          <TriggeringView
            style={styles.section}
            onHide={() => this.navTitleView.fadeInUp(200)}
            onDisplay={() => this.navTitleView.fadeOut(100)}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={{fontSize: 14}}>{data.dose}</Text>
          </TriggeringView>

          <View style={styles.priceAndButton}>
            <View style={styles.PABprice}>
              <Text style={styles.price}>Rp {data.price}</Text>
              <Text note style={{fontSize: 14}}>
                / {data.unit || this.props.unit}
              </Text>
            </View>
            <View style={styles.PABbutton}>
              {this.state.quantity > 0 ? (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity onPress={() => handleQuantity(false)}>
                    <Icon
                      name="minus-circle"
                      type="font-awesome"
                      size={28}
                      color="#00B444"
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: 20,
                      marginHorizontal: 10,
                      marginVertical: 5,
                    }}>
                    {this.state.quantity}
                  </Text>
                  <TouchableOpacity onPress={() => handleQuantity(true)}>
                    <Icon
                      name="plus-circle"
                      type="font-awesome"
                      size={28}
                      color="#00B444"
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <Button
                  small
                  style={styles.PABbuttonA}
                  onPress={() => handleAddQuantity()}>
                  <Text style={{fontWeight: 'bold'}}>Beli</Text>
                </Button>
              )}

              <Button small icon bordered style={styles.PABbuttonB}>
                <Icon name="comments" style={styles.PABbuttonBicon} />
                <Text style={{color: '#47A64A', fontWeight: 'bold'}}>Chat</Text>
              </Button>
            </View>
          </View>

          <View style={styles.descriptionProductParent}>
            <View style={styles.descriptionProductTitle}>
              <Text style={styles.descriptionProductTitleText}>
                {data.label}
              </Text>
              <Text style={{fontSize: 14}}>{data.label2}</Text>
            </View>
            <View style={styles.descriptionProductDesc}>
              <Text style={{color: 'gray', fontSize: 14}}>
                {/* {data.description} */}
                {/* {produk.desc_product.length > 0 ? produk.desc_product : null} */}
                {/* {this.state.detailProdukLocalState.desc_product.length > 0
                  ? this.state.detailProdukLocalState.desc_product
                  : 'Empty'} */}
                  {this.props.navigation.getParam('desc_product')}
              </Text>
            </View>
          </View>

          <View style={styles.tabsParent}>
            <Tabs
              tabBarUnderlineStyle={styles.tabUnderLine}
              backgroundColor="yellow"
              tabContainerStyle="yellow">
              <Tab
                heading="Health and Benefits"
                tabStyle={{backgroundColor: '#FEFEFE'}}
                textStyle={{color: 'gray'}}
                activeTabStyle={{backgroundColor: '#FEFEFE'}}
                activeTextStyle={{color: 'black', fontWeight: 'normal'}}>
                <View style={styles.tabsContent}>
                  <Text style={styles.tabsContentText}>
                    {data.healthAndBenefit}
                  </Text>
                </View>
              </Tab>

              <Tab
                heading="Prep and Storage"
                tabStyle={{backgroundColor: '#FEFEFE'}}
                textStyle={{color: 'gray'}}
                activeTabStyle={{backgroundColor: '#FEFEFE'}}
                activeTextStyle={{color: 'black', fontWeight: 'normal'}}>
                <View style={styles.tabsContent}>
                  <Text style={styles.tabsContentText}>
                    {data.prepAndStorage}
                  </Text>
                </View>
              </Tab>
            </Tabs>
          </View>

          <View style={styles.producersParent}>
            <Text style={{color: 'gray', paddingHorizontal: 20, fontSize: 16}}>
              About the Seller
            </Text>

            <View style={styles.producersTitle}>
              <View style={styles.producersAvatar}>
                <Thumbnail
                  source={{
                    uri:
                      'https://pbs.twimg.com/profile_images/1164752786992484354/PyFcqmzG.jpg',
                  }}
                />
              </View>
              <View style={styles.producersName}>
                <Text style={styles.producersNameText}>{data.producer}</Text>
              </View>
            </View>

            <View style={styles.producersDesc}>
              <Text style={styles.producersDescText}>{data.producerDesc}</Text>
            </View>
          </View>

          <Text style={styles.relatedProductText}>Related Products</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              <Card
                name="Bayam Hijau"
                label="Conventional"
                price="4.300"
                unit="250 gram"
                navigation={this.props.navigation}
              />
              <Card
                name="Bayam Hijau"
                label="Conventional"
                price="4.300"
                unit="250 gram"
                navigation={this.props.navigation}
              />
              <Card
                name="Bayam Hijau"
                label="Conventional"
                price="4.300"
                unit="250 gram"
                navigation={this.props.navigation}
              />
              <Card
                name="Bayam Hijau"
                label="Conventional"
                price="4.300"
                unit="250 gram"
                navigation={this.props.navigation}
              />
            </View>
          </ScrollView>

          <View style={styles.end}></View>
        </HeaderImageScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    productDetail: state.productReducer,
  };
};

export default connect(mapStateToProps)(DetailProdukBuyer);

const styles2 = StyleSheet.create({
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    opacity: 0,
  },
});
