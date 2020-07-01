import axios from 'axios';
import * as actions from '../actions';
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
    console.log('DATA: ', data);
    // store data to localStorage
    // Object.keys(data.session).forEach(key, => {
    //   localStorage.setItem(key, data[key]);
    // });
    // dispatch action to change redux state
    yield put(updateProfile(data.profile));
    // redirect to home route after successful login
  } catch (e) {
    // catch error on a bad axios call
    // alert using an alert library
  }
}

/**
 * saga watcher that is triggered when dispatching action of type
 * 'LOGIN_WATCHER'
 */
export function* loginWatcherSaga() {
  yield takeLatest('LOGIN_WATCHER', loginEffectSaga);
}

export default function* rootSaga() {
  yield all([loginWatcherSaga()]);
}
