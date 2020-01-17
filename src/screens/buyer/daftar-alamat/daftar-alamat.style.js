import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#F5F5F6',
  },
  body: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 11,
  },

  bodyA: {
    // backgroundColor: 'blue',
    width: '100%',
    // height: 222,
    marginTop: 22,
  },

  textInput: {
    borderColor: 'gray',
    borderBottomWidth: 1 / 2,
    paddingVertical: 0,
  },

  textStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 22,
  },

  buttonChild22: {
    borderColor: 'gray',
    color: 'green',
    backgroundColor: 'green',
    alignContent: 'center',
    justifyContent: 'center',
  },
  iconChild22: {
    color: 'gray',
    fontSize: 22,
    paddingStart: 12,
  },
  textChild22: {
    color: 'white',
  },

  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'gray',
    borderBottomWidth: 1 / 2,
    paddingVertical: 5,
  },

  footerSimpan: {
    // backgroundColor: 'red',
    borderColor: '#F5F5F6',
    borderTopWidth: 2,
    // width: '20%',
    height: '8.5%',
    // flex: 1,
    justifyContent: 'center',
  },
  buttonSimpan: {
    marginHorizontal: 22,
    // marginVertical: 22,
    justifyContent: 'center',
    backgroundColor: '#46A74A',
  },
  modalScrollView: {
    marginTop: 333,
    flex: 1,
    borderTopRightRadius: 11,
    borderTopLeftRadius: 11,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
  },
  modalScrollViewA: {
    marginTop: 22,
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
  },
  modalScrollViewText: {
    borderBottomWidth: 2,
    borderColor: 'gray',
    fontWeight: 'bold',
    color: 'gray',
  },
  modalforButton: {
    // height: 111,
    width: '100%',
    backgroundColor: 'white',
    marginTop: 22,
    paddingHorizontal: 22,
  },
});

export default styles;
