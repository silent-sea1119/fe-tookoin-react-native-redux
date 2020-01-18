import {StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    // width: 500,
    // height: 500,
    backgroundColor: '#FEFEFE',
  },
  header: {
    // height: '10%',
    backgroundColor: '#FEFEFE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabUnderLine: {
    // height: '10%',
    backgroundColor: 'green',
    height: 2,
    alignSelf: 'center',
    // width: 300,
    // marginHorizontal: '10%',
  },
  scroll: {
    height: '70%',
    backgroundColor: '#F5F6F6',
  },

  nav: {
    backgroundColor: 'white',
    height: '7.5%',
    borderTopWidth: 0.5,
    borderColor: 'green'
  },

  textHeader: {
    fontSize: 24,
    fontFamily: 'Cochin',
  },

  //CARD
  cardParent: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 0.1,
    borderColor: 'gray',
    height: 240,
    // width: 200,
    // flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  child1: {
    // backgroundColor: 'gray',
    height: '80%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  child11: {
    // backgroundColor: 'green',
    width: '50%',
  },
  textNoteChild11: {
    fontSize: 12,
  },
  textChild11: {
    paddingBottom: 10,
    fontSize: 14,
  },
  textChild11a: {
    fontSize: 14,
  },
  child12: {
    // backgroundColor: 'orange',
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  textNoteChild12: {
    fontSize: 12,
  },
  textChild12: {
    paddingBottom: 10,
    fontSize: 14,
  },
  textChild12a: {
    fontSize: 14,
  },

  child2: {
    // backgroundColor: 'blue',
    height: '20%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderColor: 'gray',
    // paddingVertical: 10
  },

  child21: {
    // backgroundColor: 'purple',
    width: '60%',
    flexDirection: 'row',
  },
  iconChild21: {
    color: 'gray',
    fontSize: 22,
    paddingHorizontal: 5,
  },

  iconChildActive: {
    color: 'green',
    fontSize: 22,
    paddingHorizontal: 5,
  },

  child22: {
    // backgroundColor: 'yellow',
    width: '40%',
    alignItems: 'flex-end',
    // justifyContent: "center",
    // justifyContent: 'flex-start',
    // alignItems: 'flex-end',
  },

  buttonChild22: {
    borderColor: 'gray',
    color: 'gray',
  },
  iconChild22: {
    color: 'gray',
    fontSize: 22,
    paddingStart: 12,
  },
  textChild22: {
    color: 'black',
  },
});

export default styles;
