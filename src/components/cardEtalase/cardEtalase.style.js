import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderColor: '#F5F5F6',
    borderWidth: 1,
    alignItems: 'flex-start',
    width: '100%',
    padding: 10,
    marginHorizontal: 12,
    backgroundColor: 'white',
    // justifyContent: 'strecth'
  },
  image: {
    // width: '100%',
    // flex: 1,
    borderRadius: 10,
    height: 100,
    backgroundColor: '#62BA67',
    width: '100%',
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
    fontSize: 12,
  },
  price: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});

export default styles;
