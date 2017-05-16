import { takeLatest, call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { API_URL } from '../constants/urls';
import ApiErrorHandler from '../ApiErrorHandler';
import { SESSION_KEY } from '../LocalStorageKeys';


function signInRequest(signInParams) {
  return fetch(
    `${API_URL}/sign_in`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        auth: {
          email: signInParams.email,
          password: signInParams.password,
        },
      }),
    })
    .then(response => ApiErrorHandler(response, 'Invalid email or password.'))
    .then(responseJson => responseJson)
    .catch((error) => { throw error; });
}

async function storeUserSession(session) {
  console.log('STORING USER SESSION.......');
  const userSession = {
    session,
    signedIn: true,
  };
  await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(userSession));
}

export function* signIn(action) {
  try {
    const session = yield call(signInRequest, action.signInParams);
    yield put({ type: 'SIGN_IN_SUCCEEDED', session });
    yield call(storeUserSession, session);
    console.log('USER SESSION STORED');
  } catch (error) {
    yield put({ type: 'SIGN_IN_FAILED', error });
  }
}

export function* watchSignIn() {
  yield takeLatest('SIGN_IN', signIn);
}
