import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignInForm from '../components/SignInForm';
import signIn from '../actions/signIn';
import CloseScreenButton from '../components/CloseScreenButton';

const actions = {
  signIn,
};

function mapStateToProps(state) {
  return {
    isFetching: state.user.get('isFetching'),
    signedIn: state.user.get('signedIn'),
    error: state.user.get('error'),
  };
}

class SignInFormContainer extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn) {
      return nextProps.navigation.goBack();
    }
    return null;
  }
  render() {
    return (
      <SignInForm {...this.props} />
    );
  }
}

SignInFormContainer.navigationOptions = ({ navigation }) => {
  const { goBack } = navigation;
  return {
    headerLeft: <CloseScreenButton goBack={goBack} />,
    headerTitle: 'Sign In',
  };
};

export default connect(mapStateToProps, actions)(SignInFormContainer);
