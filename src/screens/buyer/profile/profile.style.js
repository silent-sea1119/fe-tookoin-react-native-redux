import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
  },
  headerText: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderBottomColor: '#F5F5F6',
    borderBottomWidth: 4,
  },
  headerUsername: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAvatar: {
    borderColor:'gray',
    borderWidth:2,
    borderRadius:40,
    height: 80,
    width: 80,
    marginLeft: 24,
    marginRight: 14,
    marginVertical: 12,
  },
  headerCode: {
    flexDirection: 'row',
    alignItems:'center',
  },
  body: {
    flex: 1,
  },
  footer: {
    height: 40,
    backgroundColor: 'purple',
  },
});

export default styles;
