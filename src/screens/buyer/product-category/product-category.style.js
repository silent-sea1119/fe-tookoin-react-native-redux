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
    // backgroundColor: '#F5F5F6',
    // flex: 1,
    // flexDirection: "row",
    width: '50%',
    alignItems: 'center',
    borderColor: 'gray',
    // borderWidth: 1/2,
    marginVertical: 2,
  },

  containerScroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
  },

  labelContainerParent: {
    width: '100%',
    height: 66,
    borderColor: 'gray',
    borderTopWidth: 1/2,
    borderBottomWidth: 1/2,
    justifyContent: 'center'
  },

  labelContainer: {
    // height:200,
    // width: '100%',
    // borderColor: 'blue',
    // borderWidth: 2,
    marginHorizontal: 10,
  },

  textStyle: {
    fontSize: 24,
    color: 'gray',
  },
});

export default styles;
