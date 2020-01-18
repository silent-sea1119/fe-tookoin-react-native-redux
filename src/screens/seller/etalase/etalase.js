import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './etalase.style';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Icon} from 'react-native-elements';
import CardEtalase from '../../../components/cardEtalase/cardEtalase';

class Etalase extends Component {
  render() {
    const {
      container,
      etalase,
      header,
      headerText,
      headerUsername,
      headerAvatar,
      headerCode,
    } = styles;
    return (
      <View style={container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={header}>
            <View style={headerText}>
              <Text style={{fontWeight: 'bold', fontSize: 14}}>My Store</Text>
            </View>
            <View style={headerUsername}>
              <Image
                style={headerAvatar}
                source={require('../../../assets/images/Avatar.png')}
              />
              <Text style={{fontWeight: 'bold', fontSize: 18}}>Seller 77</Text>
            </View>
            <View style={headerCode}>
              <View
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  name="cubes"
                  type="font-awesome"
                  size={20}
                  color="#DADADA"
                />
                <View style={{marginHorizontal: 5}}>
                  <Text style={{fontSize: 12}}>Total Product</Text>
                  <Text style={{fontWeight: 'bold', color: '#62BA67'}}>
                    7 Products
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  name="receipt"
                  size={20}
                  color="#DADADA"
                />
                <View style={{marginHorizontal: 5}}>
                  <Text style={{fontSize: 12}}>Transaction</Text>
                  <Text style={{fontWeight: 'bold', color: '#62BA67'}}>20</Text>
                </View>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  name="check-circle"
                  type="font-awesome"
                  size={20}
                  color="#DADADA"
                />
                <View style={{marginHorizontal: 5}}>
                  <Text style={{fontSize: 12}}>Success Rate</Text>
                  <Text style={{fontWeight: 'bold', color: '#62BA67'}}>
                    100 %
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={etalase}>
            <CardEtalase
              name="Bayam"
              price="1000"
              unit="250 Gram"
              label="organik"
            />
            <CardEtalase
              name="Bayam"
              price="1000"
              unit="250 Gram"
              label="organik"
            />
            <CardEtalase
              name="Bayam"
              price="1000"
              unit="250 Gram"
              label="organik"
            />
            <CardEtalase
              name="Bayam"
              price="1000"
              unit="250 Gram"
              label="organik"
            />
            <CardEtalase
              name="Bayam"
              price="1000"
              unit="250 Gram"
              label="organik"
            />
            <CardEtalase
              name="Bayam"
              price="1000"
              unit="250 Gram"
              label="organik"
            />
            <CardEtalase
              name="Bayam"
              price="1000"
              unit="250 Gram"
              label="organik"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Etalase;
