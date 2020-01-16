import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#F5F5F6',
    borderBottomWidth: 4,
  },
  body: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
  },
  bodyText: {
    padding: 20,
  },
  formLogin: {
    paddingHorizontal: 20,
    alignItems: 'flex-end',
  },
  buttonLogin: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#62BA67',
  },
});

export default styles;
