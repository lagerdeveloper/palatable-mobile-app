import React, { Component } from 'react';
import { Text } from 'react-native';
import TabIcon from '../components/TabIcon';

class Search extends Component {
  render() {
    return <Text>This is the Search!</Text>;
  }
}

Search.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <TabIcon iconName="search" tintColor={tintColor} />
  ),

  headerTitle: 'Search',
  headerTitleStyle: {
    fontSize: 22,
    color: '#E71C35',
  },
};

export default Search;
