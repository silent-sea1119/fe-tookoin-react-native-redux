import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    // borderBottomColor: '#F5F5F6',
    // borderBottomWidth: 8,
  },
  headerAvatar: {
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 40,
    height: 80,
    width: 80,
    marginLeft: 24,
    marginRight: 14,
    marginVertical: 12,
  },
  headerCode: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  etalase: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
});

export default styles;
