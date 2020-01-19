import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import styles from './etalase.style';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import CardEtalase from '../../../components/cardEtalase/cardEtalase';
import {fetchEtalase} from '../../../redux/actions/etalase/etalase';
import {SAPI_URL} from 'react-native-dotenv';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigationFocus} from 'react-navigation';

class Etalase extends Component {
  state = {
    name_user: '',
    token: '',
    etalase: [],
    message: '',
  };

  handleGetItem = async () => {
    let name_user = await AsyncStorage.getItem('name_user');

    this.setState({name_user: name_user});
  };

  
  handleGetEtalaseItem = async () => {
    let url = SAPI_URL + '/product/etalase';
    let token = await AsyncStorage.getItem('token');
    let config = {
      headers: {Authorization: 'Bearer ' + token},
    };
    const dataEtalaseItem = await this.props.dispatch(
      fetchEtalase(url, config),
    );
    console.log(dataEtalaseItem.value.data.data);
    this.setState({
      etalase: dataEtalaseItem.value.data.data,
      message: dataEtalaseItem.value.data.msg,
    });
  };

  componentDidMount() {
    this.handleGetItem();
    this.handleGetEtalaseItem();
  }

  componentDidUpdate = async prevProps => {
    if (prevProps.isFocused !== this.props.isFocused) {
      if (await this.props.isFocused) {
        this.handleGetItem()
        this.handleGetEtalaseItem()
      }
      // Call any action
    }
  };

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
              <Text style={{fontWeight: 'bold', fontSize: 18}}>
                {this.state.name_user}
              </Text>
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
                    {this.state.etalase.length} Products
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
                <Icon name="receipt" size={20} color="#DADADA" />
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
            {this.state.etalase.length > 0 ? (
              this.state.etalase.map((value, index) => (
                <CardEtalase
                  id_product={value.id_product}
                  name={value.name_product}
                  desc_product={value.desc_product}
                  price={value.price}
                  unit={value.unit}
                  label={value.label}
                  key={index}
                  navigation={this.props.navigation}
                  id_category={value.id_category}
                  stock={value.stock}
                />
              ))
            ) : this.state.message === 'success' ? (
              <View>
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
    etalase: state.etalase,
  };
};

export default withNavigationFocus(connect(
  mapStateToProps, 
)(Etalase))
// export default connect(mapStateToProps)(Etalase);
