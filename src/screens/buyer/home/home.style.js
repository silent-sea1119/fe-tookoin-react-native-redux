import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  search: {
    marginHorizontal: 30,
  },
  imageSlider: {
    justifyContent: 'flex-end',
    height: 190,
    backgroundColor: '#62BA67',
    marginBottom: 20,
  },
  readMoreImageSlider: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderTopStartRadius: 20,
  },
  readMoreImageSliderText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bottomImageSlider: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    height: 35,
  },
  category: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 15,
  },
  categoryContainer: {
    // height: 500,
  },
  categoryContainerTop: {
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    height: 45,
  },
  categoryContainerBot: {
    flexDirection: 'row',
  },
});

export default styles;
