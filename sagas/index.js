import { all } from 'redux-saga/effects';
import { watchFetchFeaturedRecipes } from './featuredRecipes';
import { watchSignUp } from './signUp';
import { watchSignIn } from './signIn';
import { watchSignOut } from './signOut';
import { watchDestroyAccount } from './destroyAccount';
import { watchAddProfileImage } from './addProfileImage';

export default function* rootSaga() {
  yield all([
    watchFetchFeaturedRecipes(),
    watchSignUp(),
    watchSignIn(),
    watchSignOut(),
    watchDestroyAccount(),
    watchAddProfileImage(),
  ]);
}
