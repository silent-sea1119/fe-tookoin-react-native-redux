import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    backgroundColor: 'purple',
    // height: 100,
  },
  headerText: {
    // height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#F5F5F6',
    borderBottomWidth: 10,
  },
  username: {
    // height: 100,
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  code: {
    // height: 100,
    backgroundColor: 'blue',
  },
  body: {
    flex: 1,
    // height: '75%',
    backgroundColor: 'red',
  },
});

export default styles;
