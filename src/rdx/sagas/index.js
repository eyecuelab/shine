import axios from 'axios';
import * as actions from '../actions';
import * as types from '../actions/types';
import { AsyncStorage } from 'react-native';
import {
  takeLatest,
  call,
  put,
  cancel,
  cancelled,
  fork,
  take,
  all,
} from 'redux-saga/effects';

function loginApi(authParams) {
  return axios.post(`https://shoeshine.herokuapp.com/login`, {
    email: authParams['email'],
    password: authParams['password'],
  });
}

function* loginEffectSaga(action) {
  try {
    let { data } = yield call(loginApi, action.payload);
    // console.log('DATA: ', data);
    const token = data.data.attributes.token;
    const profile = data.included[0].attributes;

    yield put(
      actions.logIn({
        token: token,
        profile: profile,
      }),
    );
  } catch (error) {
    // console.log('ERROR: ', error.message);
    yield put({ type: 'LOGIN_ERROR', error: error.response.data.message });
  } finally {
    if (yield cancelled()) {
      yield put({ type: 'LOGIN_CANCELLED' });
    }
  }
}

export function* logoutEffectSaga() {
  try {
    yield put(actions.logOut);
  } catch (error) {
    console.log(error);
  }
}

function* loginWatcherSaga() {
  yield takeLatest('LOGIN_WATCHER', loginEffectSaga);
}

export default function* rootSaga() {
  yield all([loginWatcherSaga()]);
}
