import { call, put, takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { API_URL } from '../constants/urls';
import { SESSION_KEY } from '../LocalStorageKeys';
import ApiErrorHandler from '../ApiErrorHandler';


function signOutRequest(session) {
  return fetch(
    `${API_URL}/users/sign_out`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${session.token}`,
      },
      body: JSON.stringify({
        user: {
          id: session.user_id,
        },
      }),
    })
    .then(ApiErrorHandler)
    .catch((error) => { throw error; });
}


async function destroySession() {
  console.log('Removing Session');
  await AsyncStorage.removeItem(SESSION_KEY);
  console.log('Session Removed');
}

export function* signOut(action) {
  try {
    yield call(signOutRequest, action.session);
    yield call(destroySession);
    yield put({ type: 'SIGN_OUT_SUCCESS' });
  } catch (error) {
    yield put({ type: 'SIGN_OUT_FAILED', error });
  }
}

export function* watchSignOut() {
  yield takeLatest('SIGN_OUT', signOut);
}
