import * as actions from '../actions';
import * as types from '../actions/types';
import {
  loginUserService,
  logoutUserService,
  signUpUserService,
} from '../services/authService';
import { call, put, cancelled } from 'redux-saga/effects';

export function* loginSaga(action) {
  try {
    let response = yield call(loginUserService, action.payload);

    if (response.ok && response.status === 200) {
      const data = yield response.json();
      const token = data.data.attributes.token;
      const profile = data.included[0].attributes;

      yield put(
        actions.logIn({
          token: token,
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
      yield put(actions.logOut());
    } else {
      throw yield response;
    }
  } catch (error) {
    console.log('LOGOUT ERROR:', error);
  }
}

export function* signupSaga(action) {
  try {
    let response = yield call(signUpUserService, action.payload);
    if (response.ok && response.status === 204) {
      yield put(actions.signUp());
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
