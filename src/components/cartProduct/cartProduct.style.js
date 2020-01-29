import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding:10,
    backgroundColor: 'white',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  image: {
    margin: 5,
  },
  desc: {
    marginLeft: 10,
    flex: 2,
    justifyContent: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    // borderColor: 'purple',
    // borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 10,
  },
  nameProduct: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00B444',
  },
  priceProduct: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  unitProduct: {
    fontSize: 10,
    color: 'gray',
  },
  styleQuantity: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
});

export default styles;
