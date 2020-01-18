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
    borderBottomWidth: 4,
    borderBottomColor: '#F5F5F6',
  },
  body: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  totalPrice: {
    // fontWeight: 'bold',
  },
  totalProduct: {
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: '#F5F5F6',
    borderBottomWidth: 4,
    borderTopColor: '#F5F5F6',
    borderTopWidth: 4,
    padding: 10,
    justifyContent: 'space-between',
  },
  buttonCheckout: {
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#00B444',
    borderRadius: 10,
  },
});

export default styles;
