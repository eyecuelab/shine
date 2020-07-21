import * as actions from '../actions';
import * as types from '../actions/types';
import {
  loginUserService,
  logoutUserService,
  signUpUserService,
  editProfileService,
  confirmUserService,
} from '../services/authService';
import { call, put, cancelled, select } from 'redux-saga/effects';

export const getToken = (state) => state.users.data.data.attributes.token;

export function* loginSaga(action) {
  try {
    let response = yield call(loginUserService, action.payload);
    if (response.ok && response.status === 200) {
      const data = yield response.json();
      yield put(actions.logIn(data));
      yield put(actions.loadOrders());
      yield put(actions.loadCleaner(data));
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

export function* logoutSaga() {
  try {
    const token = yield select(getToken);
    let response = yield call(logoutUserService, token);
    if (response.ok && response.status === 200) {
      yield put({ type: types.LOGOUT_SUCCESS });
    } else {
      throw yield response.json();
    }
  } catch (error) {
    // console.log('ERROR', error.message);
  }
}

export function* signupSaga(action) {
  try {
    let response = yield call(signUpUserService, action.payload);
    console.log(response.status);
    if (response.ok && response.status === 204) {
      yield put({ type: types.SIGNUP_SUCCESS });
    } else {
      throw yield response.json();
    }
  } catch (error) {
    yield put({ type: types.SIGNUP_ERROR, error: error.message });
  } finally {
    if (yield cancelled()) {
      yield put({ type: types.SIGNUP_CANCELLED });
    }
  }
}

export function* confirmUserSaga(action) {
  try {
    let response = yield call(confirmUserService, action.payload);
    if (response.ok && response.status === 204) {
      yield put({ type: types.CONFIRM_USER_SUCCESS });
    } else {
      throw yield response.json();
    }
  } catch (error) {
    yield put({ type: types.CONFIRM_USER_ERROR, error: error.message });
  }
}

export function* editProfileSaga(action) {
  try {
    const token = yield select(getToken);
    let response = yield call(editProfileService, action.payload, token);
    if (response.status >= 200 && response.status < 300) {
      const data = yield response.json();
      const userData = data.data;
      yield put(actions.updateProfile(userData));
    } else {
      throw yield response.json();
    }
  } catch (error) {
    console.log('EDIT PROFILE ERROR: ', error);
    yield put({ type: types.UPDATE_PROFILE_ERROR, error: error.message });
  }
}

export function* editPasswordSaga(action) {
  try {
    const token = yield select(getToken);
    let response = yield call(editProfileService, action.payload, token);

    if (response.status >= 200 && response.status < 300) {
      yield put(
        actions.loginWatcher({
          email: action.payload.email,
          password: action.payload.password,
        }),
      );
    } else {
      throw yield response.json();
    }
  } catch (error) {
    yield put({ type: types.UPDATE_PROFILE_ERROR, error: error.message });
  }
}
