import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import fetchFeaturedRecipes from '../actions/fetchFeaturedRecipes';
import TabIcon from '../components/TabIcon';

const actions = {
  fetchFeaturedRecipes,
};

function getFeaturedRecipes(state) {
  if (state.featuredRecipes.featuredRecipes) {
    const recipes = state.featuredRecipes.featuredRecipes;
    const featuredRecipes = {};
    for (const recipe of recipes) {
      featuredRecipes[`${recipe.id}`] = recipe;
    }
    return featuredRecipes;
  }
  return undefined;
}

function mapStateToProps(state) {
  return {
    isFetching: state.featuredRecipes.isFetching,
    featuredRecipes: getFeaturedRecipes(state),
    error: state.featuredRecipes.error,
  };
}

class HomeContainer extends Component {
  render() {
    return <Home {...this.props} />;
  }
}

HomeContainer.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <TabIcon iconName="home" tintColor={tintColor} />
  ),

  headerTitle: 'Palatable',
  headerTitleStyle: {
    fontSize: 22,
    color: '#E71C35',
  },
};


export default connect(mapStateToProps, actions)(HomeContainer);
