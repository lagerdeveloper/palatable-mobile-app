import { call, put, takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { SESSION_KEY } from '../LocalStorageKeys';

async function destroySession() {
  console.log('Removing Session');
  await AsyncStorage.removeItem(SESSION_KEY);
  console.log('Session Removed');
}

export function* signOut(action) {
  try {
    yield call(destroySession);
    yield put({ type: 'SIGN_OUT_SUCCESS' });
  } catch (error) {
    yield put({ type: 'SIGN_OUT_FAILED', error });
  }
}

export function* watchSignOut() {
  yield takeLatest('SIGN_OUT', signOut);
}
