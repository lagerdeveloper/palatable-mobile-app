import { takeLatest, call, put } from 'redux-saga/effects';
import { API_URL } from '../constants/urls';
import ApiErrorHandler from '../ApiErrorHandler';


function signUpRequest(signUpParams) {
  return fetch(
    `${API_URL}/users`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user: {
          name: signUpParams.name,
          email: signUpParams.email,
          password: signUpParams.password,
        },
      }),
    })
    .then(ApiErrorHandler)
    .then(response => response.json())
    .then(responseJson => responseJson)
    .catch((error) => { throw error; });
}


export function* signUp(action) {
  try {
    yield call(signUpRequest, action.signUpParams);
    yield put({ type: 'SIGN_UP_SUCCEEDED' });
    yield put({ type: 'SIGN_IN', signInParams: action.signUpParams });
  } catch (error) {
    yield put({ type: 'SIGN_UP_FAILED', error });
  }
}

export function* watchSignUp() {
  yield takeLatest('SIGN_UP', signUp);
}
