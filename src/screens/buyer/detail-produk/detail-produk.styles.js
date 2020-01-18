import {StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// import {Dimensions} from 'react-native';
// import { useHeaderHeight} from 'react-navigation-stack';

// const MAX_HEIGHT = 250;
// const MIN_HEIGHT = useHeaderHeight.HEIGHT;

const styles = StyleSheet.create({
  // image: {
  //   height: MAX_HEIGHT,
  //   width: Dimensions.get('window').width,
  //   alignSelf: 'stretch',
  //   resizeMode: 'cover',
  // },

  // navTitleView: {
  //   height: MIN_HEIGHT,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   paddingTop: 16,
  //   opacity: 0,
  // },

  title: {
    fontSize: 24,
    color: '#47A64A',
    // fontWeight: 'bold',
  },
  name: {
    // fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: '#47A64A',
    fontWeight: 'bold',
  },

  tabUnderLine: {
    // height: '10%',
    backgroundColor: 'green',
    height: 2,
    alignSelf: 'center',
    // width: 300,
    // marginHorizontal: '10%',
  },
  section: {
    padding: 20,
    // borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  keywords: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  keywordContainer: {
    backgroundColor: '#999999',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  keyword: {
    fontSize: 16,
    color: 'white',
  },

  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },

  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    height: 600,
  },

  //
  priceAndButton: {
    flex: 1,
    // width:200,
    // height: 200,
    // borderColor: 'red',
    // borderWidth: 5,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
  },

  PABprice: {
    width: '60%',
    // borderColor: 'blue',
    // borderWidth: 2,
  },

  PABbutton: {
    width: '40%',
    // borderColor: 'yellow',
    // borderWidth: 2,
    // alignItems: 'center',
  },

  PABbuttonA: {
    borderColor: 'gray',
    color: 'gray',
    backgroundColor: '#47A64A',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },

  PABbuttonB: {
    borderColor: '#47A64A',
    justifyContent: 'center',
    borderRadius: 5,
  },
  PABbuttonBicon: {
    color: '#47A64A',
    fontSize: 22,
    paddingStart: 12,
  },

  descriptionProductParent: {
    flex: 1,
    // width: 200,
    // height: 200,
    // borderWidth: 0.9,
    borderTopWidth: 1 / 2,
    borderColor: 'gray',
    marginTop: 11,
  },

  descriptionProductTitle: {
    // height: '30%',
    // borderWidth: 2,
    // borderColor: 'green',
    flexWrap: 'wrap',
    marginTop: 22,
    marginHorizontal: 20,
    // justifyContent: "center",
    // alignItems: "center"
  },

  descriptionProductTitleText: {
    backgroundColor: '#667C71',
    color: 'white',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 14,
  },

  descriptionProductDesc: {
    // height: '70%',
    // borderWidth: 2,
    // borderColor: 'blue',
    marginHorizontal: 20,
    marginTop: 22,
  },

  tabsParent: {
    // borderColor: 'red',
    // borderWidth: 2,
    flex: 1,
    marginTop: 22,
    // width: 211,
    // height: 211,
  },

  tabsContent: {
    flex: 1,
    // width: 111,
    // height: 111,
    // borderColor: 'green',
    // borderWidth: 2,
    backgroundColor: '#F5F5F5',
  },

  tabsContentText: {
    marginVertical: 22,
    marginHorizontal: 20,
    color: 'gray',
    fontSize: 14,
  },

  producersParent: {
    flex: 1,
    // width: 200,
    // height: 222,
    // borderWidth: 2,
    // borderColor: 'red',
    marginTop: 44,
  },

  producersTitle: {
    // height: 111,
    // borderWidth: 2,
    // borderColor: 'green',
    flex: 1,
    flexDirection: 'row',
    marginTop: 22,
    marginBottom: 11,
    marginHorizontal: 20,
  },

  producersAvatar: {
    // height: 111,
    // width: '50%',
    // borderWidth: 2,
    // borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 11,
  },

  producersName: {
    // height: 111,
    // width: '50%',
    // borderWidth: 2,
    // borderColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },

  producersNameText: {
    color: 'gray',
    fontSize: 18,
  },

  producersDesc: {
    // height: 111,
    // width: '50%',
    // borderWidth: 2,
    borderColor: 'gray',
    borderTopWidth: 1 / 2,
    borderBottomWidth: 1 / 2,
  },

  producersDescText: {
    color: 'gray',
    marginHorizontal: 20,
    marginVertical: 11,
    fontSize: 14,
  },

  relatedProductText: {
    color: 'gray',
    marginHorizontal: 20,
    marginVertical: 22,
  },

  end: {
    marginVertical: 20,
  },
});

export default styles;
