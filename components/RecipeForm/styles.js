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
});
