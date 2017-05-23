import React, { Component } from 'react';
import { connect } from 'react-redux';
import signUp from '../actions/signUp';
import SignUpForm from '../components/SignUpForm';
import TabIcon from '../components/TabIcon';

const actions = {
  signUp,
};

function mapStateToProps(state) {
  return {
    signedUp: state.user.get('signedUp'),
    isFetching: state.user.get('isFetching'),
    error: state.user.get('error'),
  };
}

class SignUpFormContainer extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.signedUp) {
      return nextProps.navigation.goBack();
    }
    return null;
  }

  render() {
    return <SignUpForm {...this.props} />;
  }
}

SignUpFormContainer.navigationOptions = {
  headerTitle: 'Sign Up',
};

export default connect(mapStateToProps, actions)(SignUpFormContainer);
