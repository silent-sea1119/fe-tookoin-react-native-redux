import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './footer.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMI from 'react-native-vector-icons/MaterialIcons';

const Search = () => {
  const [Shop, setShop] = useState('#00B444');
  const [MyOrder, setMyOrder] = useState('#CACACA');
  const [Inbox, setInbox] = useState('#CACACA');
  const [Chat, setChat] = useState('#CACACA');
  const [Account, setAccount] = useState('#CACACA');

  const handleClickShop = bool => {
    if (bool) {
      setShop('#00B444');
      setMyOrder('#CACACA');
      setInbox('#CACACA');
      setChat('#CACACA');
      setAccount('#CACACA');
    }
  };

  const handleClickMyOrder = bool => {
    if (bool) {
      setShop('#CACACA');
      setMyOrder('#00B444');
      setInbox('#CACACA');
      setChat('#CACACA');
      setAccount('#CACACA');
    }
  };

  const handleClickInbox = bool => {
    if (bool) {
      setShop('#CACACA');
      setMyOrder('#CACACA');
      setInbox('#00B444');
      setChat('#CACACA');
      setAccount('#CACACA');
    }
  };

  const handleClickChat = bool => {
    if (bool) {
      setShop('#CACACA');
      setMyOrder('#CACACA');
      setInbox('#CACACA');
      setChat('#00B444');
      setAccount('#CACACA');
    }
  };

  const handleClickAccount = bool => {
    if (bool) {
      setShop('#CACACA');
      setMyOrder('#CACACA');
      setInbox('#CACACA');
      setChat('#CACACA');
      setAccount('#00B444');
    }
  };
  const {container, footerItem, Item} = styles;
  return (
    <View style={container}>
      <TouchableOpacity
        style={footerItem}
        onPress={() => handleClickShop(true)}>
        <View style={Item}>
          <Icon name="shopping-bag" size={24} color={Shop} />
          <Text style={{fontSize: 12, color: Shop}}>Shop</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={footerItem}
        onPress={() => handleClickMyOrder(true)}>
        <View style={Item}>
          <Icon name="list-ul" size={24} color={MyOrder} />
          <Text style={{fontSize: 12, color: MyOrder}}>My Order</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={footerItem}
        onPress={() => handleClickInbox(true)}>
        <View style={Item}>
          <Icon name="envelope" size={24} color={Inbox} />
          <Text style={{fontSize: 12, color: Inbox}}>Inbox</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={footerItem}
        onPress={() => handleClickChat(true)}>
        <View style={Item}>
          <Icon name="comments" size={24} color={Chat} />
          <Text style={{fontSize: 12, color: Chat}}>Chat</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={footerItem}
        onPress={() => handleClickAccount(true)}>
        <View style={Item}>
          <Icon name="user" size={24} color={Account} />
          <Text style={{fontSize: 12, color: Account}}>Account</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
