import { TabNavigator, StackNavigator } from 'react-navigation';
import HomeContainer from './containers/Home';
import SearchContainer from './containers/Search';
import CookBookContainer from './containers/CookBook';
import ProfileContainer from './containers/Profile';
import SignUpFormContainer from './containers/SignUpForm';
import SignInFormContainer from './containers/SignInForm';
import RecipeFormContainer from './containers/RecipeForm';

const HomeNavigator = StackNavigator({
  home: { screen: HomeContainer },
}, { headerMode: 'none' });

const SearchNavigator = StackNavigator({
  search: { screen: SearchContainer },
}, { headerMode: 'none' });

const CookBookNavigator = StackNavigator({
  cookbook: { screen: CookBookContainer },
  newRecipe: { screen: RecipeFormContainer },
}, { headerMode: 'none' });

const ProfileNavigator = StackNavigator({
  profile: { screen: ProfileContainer },
}, { headerMode: 'none' });

const MainScreenNavigator = TabNavigator({
  Home: { screen: HomeNavigator },
  Search: { screen: SearchNavigator },
  CookBook: { screen: CookBookNavigator },
  Profile: { screen: ProfileNavigator },
},
  {
    tabBarOptions: {
      activeTintColor: '#E71C35',
      labelStyle: {
        fontSize: 12,
      },
      showIcon: true,
    },
  });

const AppNavigator = StackNavigator({
  Initial: { screen: MainScreenNavigator },
  SignUp: { screen: SignUpFormContainer },
  SignIn: { screen: SignInFormContainer },
});

export default AppNavigator;
