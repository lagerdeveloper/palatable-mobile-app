import { combineReducers } from 'redux';
import featuredRecipes from './featuredRecipes';
import navigationReducer from './navigationReducer';
import accountReducer from './accountReducer';

export default combineReducers({
  nav: navigationReducer,
  featuredRecipes,
  user: accountReducer,
});
