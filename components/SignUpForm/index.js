import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const ICON_SIZE = 21;
const ERROR_COLOR = '#a94442';
const ACTIVE_COLOR = 'grey';


class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.emailHandler = this.emailHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.nameHandler = this.nameHandler.bind(this);
    this.validate = this.validate.bind(this);
    this.renderError = this.renderError.bind(this);
    this.state = {
      email: '',
      password: '',
      name: '',
      nameError: false,
      emailError: false,
      passwordError: false,
    };
  }

  onPress() {
    if (this.validate()) {
      const signUpParams = {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      };
      return this.props.signUp(signUpParams);
    }
    return null;
  }

  validate() {
    const emailInvalid = this.state.email === '';
    const passwordInvalid = this.state.password === '';
    const nameInvalid = this.state.name === '';
    if (nameInvalid && emailInvalid && passwordInvalid) {
      this.setState({ emailError: true, passwordError: true, nameError: true });
      return false;
    } else if (emailInvalid) {
      this.setState({ emailError: true });
      return false;
    } else if (passwordInvalid) {
      this.setState({ passwordError: true });
      return false;
    } else if (nameInvalid) {
      this.setState({ nameError: true });
      return false;
    }
    return true;
  }

  emailHandler(email) {
    this.setState({ emailError: false, email });
  }

  passwordHandler(password) {
    this.setState({ passwordError: false, password });
  }

  nameHandler(name) {
    this.setState({ nameError: false, name });
  }

  activityHandler() {
    if (this.props.isFetching) {
      return (
        <ActivityIndicator
          animating
          size="large"
          style={styles.isFetching}
        />
      );
    }
    return (
      <TouchableOpacity style={styles.signUpButton} onPress={this.onPress.bind(this)}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    );
  }

  renderError() {
    if (this.props.error) {
      return <Text style={styles.errorText}>{this.props.error.message}</Text>;
    }
    return null;
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <View style={this.state.nameError ? styles.nameErrorContainer : styles.nameInputContainer}>
          <View style={styles.formIcon}>
            <Icon name="id-badge" size={ICON_SIZE} color={ACTIVE_COLOR} />
          </View>
          <TextInput
            autoFocus
            style={styles.formInput}
            placeholder="Name (What others will see)"
            placeholderTextColor={this.state.nameError ? ERROR_COLOR : ACTIVE_COLOR}
            onChangeText={name => this.nameHandler(name)}
            value={this.state.name}
          />
        </View>
        <View style={this.state.emailError ? styles.emailErrorContainer : styles.emailInputContainer}>
          <View style={styles.formIcon}>
            <Icon name="envelope-o" size={ICON_SIZE} color={ACTIVE_COLOR} />
          </View>
          <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.formInput}
            placeholder="Email"
            placeholderTextColor={this.state.emailError ? ERROR_COLOR : ACTIVE_COLOR}
            onChangeText={email => this.emailHandler(email)}
            value={this.state.email}
          />
        </View>
        <View
          style={this.state.passwordError ? styles.passwordErrorContainer : styles.passwordInputContainer}
        >
          <View style={styles.formIcon}>
            <Icon name="lock" size={ICON_SIZE} color={ACTIVE_COLOR} />
          </View>
          <TextInput
            autoCorrect={false}
            style={styles.formInput}
            placeholder="Password"
            placeholderTextColor={this.state.passwordError ? ERROR_COLOR : ACTIVE_COLOR}
            secureTextEntry
            onChangeText={password => this.passwordHandler(password)}
            value={this.state.password}
          />
        </View>
        {this.renderError()}
        {this.activityHandler()}
        <Text style={{ alignSelf: 'center', marginTop: 10 }}>
          {'Already have an account? '}
          <Text
            style={styles.signInTextButton}
            onPress={() => {
              this.props.navigation.goBack();
              this.props.navigation.navigate('SignIn');
            }}
          >
            Sign in
          </Text>
          {' here.'}
        </Text>
      </View>
    );
  }
}

export default SignUpForm;
