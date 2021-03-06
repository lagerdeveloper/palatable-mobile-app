import { takeLatest, call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { API_URL } from '../constants/urls';
import ApiErrorHandler from '../ApiErrorHandler';
import { REGISTRATION_KEY, SESSION_KEY } from '../LocalStorageKeys';


function destroyAccountRequest(session) {
  return fetch(
    `${API_URL}/destroy`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${session.token}`,
      },
    })
    .then(ApiErrorHandler)
    .catch((error) => { throw error; });
}

async function removeLocalStorage() {
  await AsyncStorage.multiRemove([REGISTRATION_KEY, SESSION_KEY]);
}

function* destroyAccount(action) {
  try {
    yield call(destroyAccountRequest, action.session);
    yield call(removeLocalStorage);
    console.log('LOCAL STORAGE CLEARED');
    yield put({ type: 'DESTROY_ACCOUNT_SUCCESS' });
  } catch (error) {
    console.log(error.message);
    yield put({ type: 'DESTROY_ACCOUNT_FAILED', error });
  }
}

export function* watchDestroyAccount() {
  yield takeLatest('DESTROY_ACCOUNT', destroyAccount);
}
