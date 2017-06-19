import { takeLatest, put, call } from 'redux-saga/effects';
import { API_URL } from '../constants/urls';
import ApiErrorHanlder from '../ApiErrorHandler';


function addProfileImageRequest(session, imageSourceUrl) {
  return fetch(
    `${API_URL}/users/profile`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${session.token}`,
      },
      body: JSON.stringify({
        user: {
          image: imageSourceUrl,
        },
      }),
    })
    .then(ApiErrorHanlder)
    .catch((error) => { throw error; });
}

export function* addProfileImage(action) {
  try {
    yield call(addProfileImageRequest, action.session, action.imageSourceUrl);
    yield put({ type: 'ADD_PROFILE_IMAGE_SUCCESS' });
  } catch (error) {
    yield put({ type: 'ADD_PROFILE_IMAGE_FAILED', error });
  }
}
export function* watchAddProfileImage() {
  yield takeLatest('ADD_PROFILE_IMAGE', addProfileImage);
}
