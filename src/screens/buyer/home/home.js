import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Search from '../../../components/search/search.js';
import Footer from '../../../components/footer/footer.js';
import styles from './home.style';
import Category from '../../../components/category/category.js';
import Border from '../../../components/border/border';
import Card from '../../../components/card/card';
import Icon from 'react-native-vector-icons/FontAwesome';

import {storeData, retrieveData} from '../../../utils';

class HomeBuyer extends Component {

  componentDidMount = async () => {
    if (await retrieveData('token')) {
      if ((await retrieveData('role')) == 1) {
        this.props.navigation.navigate('Profile');
      } else if ((await retrieveData('role')) == 2) {
        this.props.navigation.navigate('HomeSeller');
      }
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
        <Search />
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
                <Card
                  name="Bayam Hijau"
                  label="Conventional"
                  price="4.300"
                  unit="250 gram"
                  navigation={this.props.navigation}
                />
                <Card
                  name="Labu Siam"
                  label="Conventional"
                  price="4.600"
                  unit="500 gram"
                  navigation={this.props.navigation}
                />
                <Card
                  name="Paprika Kuning"
                  label="Organik"
                  price="20.000"
                  unit="1 pcs"
                  navigation={this.props.navigation}
                />
                <Card
                  name="Wortel Organik"
                  label="Organik"
                  price="3.000"
                  unit="500 gram"
                  navigation={this.props.navigation}
                />
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
                  <Card
                    name="Alpukat Mentega"
                    label="Conventional"
                    price="999"
                    unit="1 kg"
                    navigation={this.props.navigation}
                  />
                  <Card
                    name="Pisang Raja"
                    label="Conventional"
                    price="29.800"
                    unit="1 sisir"
                    navigation={this.props.navigation}
                  />
                  <Card
                    name="Pisang Uli"
                    label="Organik"
                    price="12.300"
                    unit="1 sisir"
                    navigation={this.props.navigation}
                  />
                  <Card
                    name="Salak"
                    label="Organik"
                    price="4.990"
                    unit="500 gram"
                    navigation={this.props.navigation}
                  />
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

export default HomeBuyer;
