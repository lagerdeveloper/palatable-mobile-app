import React, { Component } from 'react';
import { View, TouchableHighlight, Text, Image } from 'react-native';
import { BACKEND_URL } from '../../constants/urls';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';

const options = {
  title: null,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class ProfileImage extends Component {
  constructor(props) {
    super(props);
    const imageUri = props.session.image ? `${BACKEND_URL}${props.session.image}` : null;
    this.state = {
      image: {
        uri: imageUri,
      },
    };
  }

  _onPress() {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const imageSource = `data:image/jpeg;base64,${response.data}`;
        this.props.addProfileImage(this.props.session, imageSource);
        this.setState({ image: { uri: imageSource } });
      }
    });
  }

  render() {
    return (
      <Image
        style={styles.profileImage}
        source={this.state.image.uri ? this.state.image : require('../../assets/profileDefault.jpg')}
      >
        <TouchableHighlight activeOpacity={0.5} underlayColor="transparent" onPress={() => this._onPress()}>
          <View style={styles.cameraIconContainer}>
            <Icon name="ios-camera" size={20} />
            <Text style={{ marginLeft: 3, fontSize: 10 }}>Add Photo</Text>
          </View>
        </TouchableHighlight>
      </Image>
    );
  }
}

export default ProfileImage;
