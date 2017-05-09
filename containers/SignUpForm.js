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
    signedUp: state.user.signedUp,
    isFetching: state.user.isFetching,
    error: state.user.error,
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
