import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class RadioButtons extends Component {
  state = {
    value: null,
  };

  render() {
    const {options} = this.props;
    const {value} = this.state;

    return (
      <View>
        {options.map(item => {
          return (
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  value: item.key,
                });
              }}>
              <View key={item.key} style={styles.buttonContainer}>
                <Text style={{
                  color: 'gray'
                }}>{item.text}</Text>
                <TouchableOpacity
                  style={styles.circle}
                  onPress={() => {
                    this.setState({
                      value: item.key,
                    });
                  }}>
                  {value === item.key && <View style={styles.checkedCircle} />}
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 11,
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingBottom: 5,
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    // backgroundColor: '#794F9B',
    backgroundColor: 'green',
  },
});
