import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './search.style';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = props => {
  const {container, iconText} = styles;
  const [searchText, setsearchText] = useState('');

  const handleSearch = () => {
    props.navigation.push('searchScreen', {
      searchText: searchText,
    });
    console.log(searchText);
  };

  return (
    <View style={container}>
      <TouchableOpacity onPress={() => handleSearch()}>
        <Icon style={iconText} name="search" size={20} color="#0DB957" />
      </TouchableOpacity>
      <TextInput
        placeholder="Cari yang segar disini"
        onChange={e => setsearchText(e.nativeEvent.text)}
        onSubmitEditing={e => handleSearch()}
        defaultValue={props.searchText}
      />
    </View>
  );
};

export default Search;
