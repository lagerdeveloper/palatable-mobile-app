import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignInForm from '../components/SignInForm';
import signIn from '../actions/signIn';

const actions = {
  signIn,
};

function mapStateToProps(state) {
  return {
    isFetching: state.user.isFetching,
    signedIn: state.user.signedIn,
    error: state.user.error,
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

SignInFormContainer.navigationOptions = {
  headerTitle: 'Sign In',
};

export default connect(mapStateToProps, actions)(SignInFormContainer);
