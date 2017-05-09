import React, { Component } from 'react';
import { Text } from 'react-native';
import TabIcon from '../components/TabIcon';
import AddRecipeButton from '../components/AddRecipeButton';

class CookBookContainer extends Component {
  render() {
    return <Text>This is the Cookbook!</Text>;
  }
}

CookBookContainer.navigationOptions = ({ navigation }) => {
  const { navigate } = navigation;
  return {
    tabBarIcon: ({ tintColor }) => (
      <TabIcon iconName="book" tintColor={tintColor} />
    ),
    headerRight: <AddRecipeButton navigate={navigate} />,
    headerTitle: 'CookBook',
    headerTitleStyle: {
      fontSize: 22,
      color: '#E71C35',
    },
  };
};

export default CookBookContainer;
