import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  slide: {
    alignItems: 'center',
    height,
    width,
  },
  titleInput: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 30,
    margin: 20,
    padding: 5,
    fontSize: 14,
  },

  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },

  activeDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    margin: 2,
    backgroundColor: 'red',
  },

  normalDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1,
    margin: 2,
    borderColor: 'red',
  },
});
