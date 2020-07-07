import * as actions from '../actions';
import * as types from '../actions/types';
import { loginService, logoutService } from '../services/authService';
import { call, put, cancelled } from 'redux-saga/effects';

export function* loginSaga(action) {
  try {
    let response = yield call(loginService, action.payload);

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
      throw response;
    }
  } catch (error) {
    yield put({ type: types.LOGIN_ERROR, error: error.status });
  } finally {
    if (yield cancelled()) {
      yield put({ type: types.LOGIN_CANCELLED });
    }
  }
}

export function* logoutSaga(action) {
  try {
    let response = yield call(logoutService, action.payload);
    if (response.ok && response.status === 200) {
      yield put(actions.logOut);
    } else {
      throw response;
    }
  } catch (error) {
    console.log('LOGOUT ERROR:', error);
  }
}
