import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

function mapStateToProps(state) {
  return {
    signedIn: state.user.get('signedIn'),
    session: state.user.get('session'),
  };
}
const ProfileHeader = (props) => {
  if (props.signedIn) {
    return <Text style={styles.titleStyle}>{props.session.name}</Text>;
  }
  return <Text style={styles.titleStyle}>Profile</Text>;
};

export default connect(mapStateToProps, null)(ProfileHeader);
