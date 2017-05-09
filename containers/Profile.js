import React, { Component } from 'react';
import { connect } from 'react-redux';
import signUp from '../actions/signUp';
import signOut from '../actions/signOut';
import destroyAccount from '../actions/destroyAccount';
import addProfileImage from '../actions/addProfileImage';
import Profile from '../components/Profile';
import TabIcon from '../components/TabIcon';
import ProfileHeader from '../components/ProfileHeader';

const actions = {
  signUp,
  signOut,
  destroyAccount,
  addProfileImage,
};

function mapStateToProps(state) {
  return {
    isFetching: state.user.isFetching,
    signedIn: state.user.signedIn,
    session: state.user.session,
    error: state.user.error,
  };
}

class ProfileContainer extends Component {
  render() {
    return <Profile {...this.props} />;
  }
}

ProfileContainer.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <TabIcon iconName="user-circle" tintColor={tintColor} />
  ),
  tabBarVisible: true,
  headerTitle: <ProfileHeader />,
};

export default connect(mapStateToProps, actions)(ProfileContainer);
