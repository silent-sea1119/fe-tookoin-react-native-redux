import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  DrawerLayoutAndroid,
  Dimensions,
} from 'react-native';
import {
  Container,
  Header,
  Text,
  Button,
  Content,
  Tab,
  Tabs,
  Title,
  Card,
  CardItem,
  Thumbnail,
  // Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardEtalase from '../../../components/cardEtalase/cardEtalase';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import Tab1 from './tabOne';
// import Tab2 from './tabTwo';

import styles from './my-order.style';

export default class MyOrderSeller extends Component {
  state = {
    status: true,
  };

  render() {
    const imageUri = require('../../../assets/images/belumAdaPesanan.png');
    // const imageUri = require('../../../assets/static-image/monster-egg.png');

    const arr = [1, 2, 3, 4];

    return (
      <View style={styles.parent}>
        <Header
          //  hasTabs
          style={styles.header}>
          <Title style={{color: 'black'}}>My Order</Title>
        </Header>
        <Tabs
          tabBarUnderlineStyle={styles.tabUnderLine}
          backgroundColor="yellow"
          tabContainerStyle="yellow">
          <Tab
            heading="In Progress"
            tabStyle={{backgroundColor: '#FEFEFE'}}
            textStyle={{color: '#40b33f'}}
            activeTabStyle={{backgroundColor: '#FEFEFE'}}
            activeTextStyle={{color: 'green', fontWeight: 'normal'}}>
            <ScrollView
              style={{
                backgroundColor: '#F5F6F6',
                flex: 1,
              }}>
              {arr.map((item, index) => {
                return (
                  <View style={styles.cardParent} key={index}>
                    <View style={styles.child1}>
                      <View style={styles.child11}>
                        <Text note style={styles.textNoteChild11}>
                          Order Number
                        </Text>
                        <Text style={styles.textChild11}>#SR23555HJF8</Text>
                        <Text note style={styles.textNoteChild11}>
                          Last Status
                        </Text>
                        <Text style={styles.textChild11a}>
                          Menunggu Pembayaran dari Buyer
                        </Text>
                      </View>

                      <View style={styles.child12}>
                        <Text note style={styles.textNoteChild12}>
                          Transaction Date
                        </Text>
                        <Text style={styles.textChild12}>
                          Wenesday, 15 Jan 2020
                        </Text>
                        <Text note style={styles.textNoteChild12}>
                          Billing Total
                        </Text>
                        <Text style={styles.textChild12a}>Rp 4000</Text>
                      </View>
                    </View>
                    <View style={styles.child2}>
                      <View style={styles.child21}>
                        <MaterialIcons name="payment" style={styles.iconChild21} />
                        <Icon name="comments" style={styles.iconChild21} />
                        <Icon name="comments" style={styles.iconChild21} />
                        <Icon name="comments" style={styles.iconChild21} />
                        <Icon name="comments" style={styles.iconChild21} />
                      </View>
                      <View style={styles.child22}>
                        <Button
                          icon
                          small
                          bordered
                          style={styles.buttonChild22}>
                          <Icon name="comments" style={styles.iconChild22} />
                          <Text style={styles.textChild22}>Chat Buyer</Text>
                        </Button>
                      </View>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </Tab>

          <Tab
            heading="Completed"
            tabStyle={{backgroundColor: '#FEFEFE'}}
            textStyle={{color: '#40b33f'}}
            activeTabStyle={{backgroundColor: '#FEFEFE'}}
            activeTextStyle={{color: 'green', fontWeight: 'normal'}}>
            <ScrollView
              style={{
                backgroundColor: '#F5F6F6',
                flex: 1,
              }}>
              <View style={styles.cardParent}>
                <View style={styles.child1}>
                  <View style={styles.child11}>
                    <Text note style={styles.textNoteChild11}>
                      Order Number
                    </Text>
                    <Text style={styles.textChild11}>#SR23555HJF8</Text>

                    <Text note style={styles.textNoteChild11}>
                      Last Status
                    </Text>
                    <Text style={styles.textChild11a}>
                      Menunggu proses pembayaran & verifikasi pesanan kamu
                    </Text>
                  </View>
                  <View style={styles.child12}>
                    <Text note style={styles.textNoteChild12}>
                    Transaction Date
                    </Text>
                    <Text style={styles.textChild12}>
                      Wenesday, 15 Jan 2020
                    </Text>
                    <Text note style={styles.textNoteChild12}>
                      Bill Total
                    </Text>
                    <Text style={styles.textChild12a}>Rp 4000</Text>
                  </View>
                </View>
                <View style={styles.child2}>
                  <View style={styles.child21}>
                    <Icon name="comments" style={styles.iconChild21} />
                    <Icon name="comments" style={styles.iconChild21} />
                    <Icon name="comments" style={styles.iconChild21} />
                    <Icon name="comments" style={styles.iconChild21} />
                    <Icon name="comments" style={styles.iconChild21} />
                  </View>
                  <View style={styles.child22}>
                    <Button icon small bordered style={styles.buttonChild22}>
                      <Icon name="comments" style={styles.iconChild22} />
                      <Text style={styles.textChild22}>Chat Buyer</Text>
                    </Button>
                  </View>
                </View>
              </View>
            </ScrollView>
          </Tab>
        </Tabs>
      </View>
    );
  }
}
