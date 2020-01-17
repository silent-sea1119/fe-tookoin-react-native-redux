import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderColor: '#F5F5F6',
    backgroundColor: 'red',
    borderWidth: 1,
    justifyContent: 'flex-start',
    width: 160,
    padding: 10,
    backgroundColor: 'white',
    // justifyContent: 'strecth'
  },
  image: {
    // width: '100%',
    // flex: 1,
    borderRadius: 10,
    height: 100,
    backgroundColor: '#62BA67',
    width: 140,
    alignItems: 'flex-start',
  },
  name: {
    marginVertical: 6,
    color: '#62BA67',
    fontWeight: 'bold',
    fontSize: 16,
  },
  priceText: {
    marginVertical: 6,
    color: '#62BA67',
    fontWeight: 'bold',
    fontSize: 14,
  },
  unit: {
    marginVertical: 6,
    color: 'gray',
    fontSize: 14,
  },
  price: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  beli: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#62BA67',
    width: 140,
    height: 32,
  },
  kuantity: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
});

export default styles;
