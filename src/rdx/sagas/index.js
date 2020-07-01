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

// function that returns an axios call
function loginApi(authParams) {
  return axios.post(`https://shoeshine.herokuapp.com/login`, {
    email: authParams['email'],
    password: authParams['password'],
  });
}

// saga worker that is responsible for the side effects
function* loginEffectSaga(action) {
  try {
    // data is obtained after axios call is resolved
    let { data } = yield call(loginApi, action.payload);
    // console.log(data);
    const token = data.data.attributes.token;
    const profile = data.included[0].attributes;

    // store data to localStorage
    // Object.keys(data.session).forEach(key => {
    //   localStorage.setItem(key, data[key]);
    // });

    // dispatch action to change redux state
    yield put(
      actions.logIn({
        token: token,
        profile: profile,
      }),
    );
  } catch (error) {
    // yield put({ type: 'LOGIN_ERROR', error: error.message });
    // alert(error.response.data.message);
  }
  // finally {
  //   if (yield cancelled()) {
  //     yield put({ type: 'LOGIN_CANCELLED' });
  //   }
  // }
}

// function logoutApi() {
//   return axios.post(`https://shoeshine.herokuapp.com/logout`);
// }

function* logoutEffectSaga() {
  try {
    // const response = yield call(logoutApi);
    yield put(actions.logOut);
    // return response;
  } catch (error) {
    console.log(error);
  }
}

/**
 * saga watcher that is triggered when dispatching action of type
 * 'LOGIN_WATCHER'
 */
function* loginWatcherSaga() {
  yield takeLatest(actions.loginWatcher, loginEffectSaga);
}

export default function* rootSaga() {
  yield all([
    loginWatcherSaga(),
    logoutEffectSaga(),
    // add other watchers to the array
  ]);
}
