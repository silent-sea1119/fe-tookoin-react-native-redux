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

//import
import tvShowContent from '../../../assets/tvShowContent';
import styles from './detail-produk.styles';
import Card from '../../../components/card/card';

const MIN_HEIGHT = useHeaderHeight.HEIGHT;
const MAX_HEIGHT = 250;

class DetailProdukBuyer extends Component {
  constructor() {
    super();
    this.state = {showNavTitle: false};
  }

  render() {
    const data = {
      title: 'Susu Ultra Full Cream',
      dose: '1 pcs (1 liter)',
      price: '40000',
      producer: 'Mawang',
      producerDesc:
        'Mawang adalah seorang musisi asal Bandung yang belakangan ini sedang viral. Lagunya yang berjudul Kasih Sayang Kepada Orang Tua',
      unit: '1 pcs',
      description:
        'Ultra Milk Rasa cocok untuk dikonsumsi sehari-hari dan juga diminum sehabis beraktivitas atau berolahraga untuk memenuhi kembali cairan tubuh dan membantu pembentukan tubuh. Produk ini baik untuk diminum anak-anak berumur 1 tahun ke atas, apalagi ditambah varian rasa dari bahan alami yang mengandung banyak nutrisi alami yang dibutuhkan tubuh, terutama bagi remaja yang sedang dalam masa pertumbuhan.',
      label: 'Organic susu kuda',
      label2: 'Produk Lokal',
      healthAndBenefit:
        'Dalam tiap 100 gram susu kuda liar menghasilkan 44 kalori, yang lebih sedikit ketimbang susu sapi yang sebesar 64 kalori sehingga membuat orang yang minum susu kuda tidak cepat gemuk.',
      prepAndStorage:
        'Kocok dahulu sebelum diminum jangan disimpan di dalam freezer dan jangan dimasak di atas panas api langsung. Kedua tindakan tersebut dapat menghilangkan khasiat susu kuda sumbawa asli',
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
          renderHeader={() => (
            <Image source={tvShowContent.image} style={styles2.image} />
          )}
          renderFixedForeground={() => (
            <Animatable.View
              style={styles2.navTitleView}
              ref={navTitleView => {
                this.navTitleView = navTitleView;
              }}>
              <Text style={styles.navTitle}>
                {data.title}
              </Text>
            </Animatable.View>
          )}
          renderForeground={() => (
            <View style={styles.titleContainer}>
              <Text style={styles.imageTitle}>
                {/* {tvShowContent.title} */}
              </Text>
            </View>
          )}>
          <TriggeringView
            style={styles.section}
            onHide={() => this.navTitleView.fadeInUp(200)}
            onDisplay={() => this.navTitleView.fadeOut(100)}>
            <Text style={styles.title}>{data.title}qweqew</Text>
            <Text style={{fontSize: 14}}>{data.dose}</Text>
            {/* ({tvShowContent.year}) */}
          </TriggeringView>

          <View style={styles.priceAndButton}>
            <View style={styles.PABprice}>
              <Text style={styles.price}>Rp {data.price}</Text>
              <Text note style={{fontSize: 14}}>/ {data.unit}</Text>
            </View>
            <View style={styles.PABbutton}>
              <Button small style={styles.PABbuttonA}>
                <Text style={{fontWeight: 'bold'}}>Beli</Text>
              </Button>

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
              <Text style={{color: 'gray', fontSize: 14}}>{data.description}</Text>
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
              About the Producers
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

          
<Text
style={styles.relatedProductText}
>
  Related Products
</Text>
          

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              <Card
                name="Bayam Hijau"
                label="Conventional"
                price="Rp 4.300"
                unit="250 gram"
              />
              <Card
                name="Bayam Hijau"
                label="Conventional"
                price="Rp 4.300"
                unit="250 gram"
              />
              <Card
                name="Bayam Hijau"
                label="Conventional"
                price="Rp 4.300"
                unit="250 gram"
              />
              <Card
                name="Bayam Hijau"
                label="Conventional"
                price="Rp 4.300"
                unit="250 gram"
              />
            </View>
          </ScrollView>

          <View
          style={styles.end}
          >

          </View>

          
        </HeaderImageScrollView>
      </View>
    );
  }
}

export default DetailProdukBuyer;

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
