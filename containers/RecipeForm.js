import React, { Component } from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import RecipeForm from '../components/RecipeForm';
import TabIcon from '../components/TabIcon';

function mapStateToProps(state) {
  return {
    session: state.user.get('session'),
  };
}

class RecipeFormContainer extends Component {
  render() {
    return <RecipeForm {...this.props} />;
  }
}

RecipeFormContainer.navigationOptions = ({ navigation }) => {
  const { goBack } = navigation;
  return {
    tabBarIcon: ({ tintColor }) => <TabIcon iconName="book" tintColor={tintColor} />,
    headerTitle: 'New Recipe',
    headerLeft: <Button title="Cancel" onPress={() => goBack()} />,
    headerTitleStyle: {
      fontSize: 22,
      color: '#E71C35',
    },
  };
};

export default connect(mapStateToProps, null)(RecipeFormContainer);
