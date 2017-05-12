import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from 'react-native';
import styles from './styles';
import ProfileImage from './profileImage';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.renderJoinButton = this.renderJoinButton.bind(this);
    this.renderProfile = this.renderProfile.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  renderError() {
    if (this.props.error) {
      return <Text style={styles.errorText}>{this.props.error.message}</Text>;
    }
    return null;
  }

  renderJoinButton() {
    return (
      <View style={styles.joinContainer}>
        <TouchableOpacity
          style={styles.joinButtonStyle}
          onPress={() => this.props.navigation.navigate('SignUp')}
        >
          <Text style={styles.joinButtonText}>Join Now</Text>
        </TouchableOpacity>
        <Text>
          {'Already have an account? '}
          <Text
            style={styles.signInTextButton}
            onPress={() => this.props.navigation.navigate('SignIn')}
          >
            Sign in
          </Text>
          {' here.'}
        </Text>
      </View>
    );
  }

  renderProfile() {
    return (
      <View>
        <ProfileImage
          session={this.props.session}
          addProfileImage={this.props.addProfileImage}
        />
        <Button
          title="Sign Out"
          onPress={() => this.props.signOut(this.props.session)}
          color="red"
        />
        <Button
          title="Delete Account"
          onPress={() => this.props.destroyAccount(this.props.session)}
          color="red"
        />
      </View>
    );
  }

  render() {
    if (this.props.isFetching) {
      return (
        <ActivityIndicator
          animating
          size="large"
          style={styles.fetching}
        />
      );
    }
    return (
      <View style={styles.container}>
        {this.renderError()}
        {this.props.signedIn ? this.renderProfile() : this.renderJoinButton()}
      </View>
    );
  }
}

export default Profile;
