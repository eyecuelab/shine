import * as actions from '../actions';
import * as types from '../actions/types';
import {
  loginUserService,
  logoutUserService,
  signUpUserService,
  editProfileService,
} from '../services/authService';
import { call, put, cancelled, select } from 'redux-saga/effects';

export function* loginSaga(action) {
  try {
    let response = yield call(loginUserService, action.payload);
    if (response.ok && response.status === 200) {
      const data = yield response.json();
      const token = data.data.attributes.token;
      const profile = data.included[0].attributes;
      const userId = data.data.attributes.user_id;

      yield put(
        actions.logIn({
          token: token,
          userId: userId,
          profile: profile,
        }),
      );
    } else {
      throw yield response.json();
    }
  } catch (error) {
    yield put({ type: types.LOGIN_ERROR, error: error.message });
  } finally {
    if (yield cancelled()) {
      yield put({ type: types.LOGIN_CANCELLED });
    }
  }
}

export function* logoutSaga(action) {
  try {
    let response = yield call(logoutUserService, action.payload);
    if (response.ok && response.status === 200) {
      yield put({ type: types.LOGOUT_SUCCESS });
    } else {
      throw yield response.json();
    }
  } catch (error) {
    console.log('LOGOUT ERROR:', error);
  }
}

export function* signupSaga(action) {
  try {
    let response = yield call(signUpUserService, action.payload);
    if (response.ok && response.status === 204) {
      yield put({ type: types.SIGNUP_SUCCESS });
    } else {
      throw yield response.json();
    }
  } catch (error) {
    console.log('SIGNUP ERROR: ', error);
    yield put({ type: types.SIGNUP_ERROR, error: error.message });
  } finally {
    if (yield cancelled()) {
      yield put({ type: types.SIGNUP_CANCELLED });
    }
  }
}

export const getToken = (state) => state.users.auth.token;

export function* editProfileSaga(action) {
  try {
    const token = yield select(getToken);
    let response = yield call(editProfileService, action.payload);
    const data = yield response.json();
    const profile = data.data.attributes;
    const userId = data.data.id;
    if (response.status >= 200 && response.status < 300) {
      yield put(
        actions.updateProfile({
          token: token,
          userId: userId,
          profile: profile,
        }),
      );
    } else {
      throw yield response.json();
    }
  } catch (error) {
    console.log('EDIT PROFILE ERROR: ', error);
  }
}
