import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  fetching: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  joinContainer: {
    alignItems: 'center',
  },
  cameraIconContainer: {
    opacity: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  joinButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E71C35',
    backgroundColor: '#E71C35',
    borderRadius: 5,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 5,
    height: 30,
    width: 200,
  },
  joinButtonText: {
    color: 'white',
    fontSize: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  signInTextButton: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  errorText: {
    fontSize: 17,
    color: '#a94442',
    alignSelf: 'center',
    marginBottom: 10,
  }
});
