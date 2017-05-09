import { takeLatest, call, put } from 'redux-saga/effects';
import { API_URL } from '../constants/urls';
import ApiErrorHandler from '../ApiErrorHandler';

function fetchRecipes() {
  return fetch(
    `${API_URL}/recipes`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    .then(ApiErrorHandler)
    .then(response => response.json())
    .then(responseJson => responseJson)
    .catch((error) => { throw error; });
}

export function* fetchFeaturedRecipes() {
  try {
    const featuredRecipes = yield call(fetchRecipes);
    yield put({ type: 'FETCH_FEATURED_RECIPES_SUCCEEDED', featuredRecipes });
  } catch (error) {
    yield put({ type: 'FETCH_FEATURED_RECIPES_FAILED', error });
  }
}

export function* watchFetchFeaturedRecipes() {
  yield takeLatest('FETCH_FEATURED_RECIPES', fetchFeaturedRecipes);
}
