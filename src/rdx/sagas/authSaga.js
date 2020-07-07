// import axios from 'axios';
import * as actions from '../actions';
import * as types from '../actions/types';
import { loginService } from '../services/authService';
import { call, put, cancelled } from 'redux-saga/effects';
import { handleOrdersLoad } from './ordersSaga';

// function loginApi(authParams) {
//   return axios.post(`https://shoeshine.herokuapp.com/login`, {
//     email: authParams.email,
//     password: authParams.password,
//   });
// }

export function* loginSaga(action) {
  try {
    let data = yield call(loginService, action.payload);
    // console.log('DATA: ', data);
    const token = data.data.attributes.token;
    const profile = data.included[0].attributes;

    yield put(
      actions.logIn({
        token: token,
        profile: profile,
      }),
    );
    yield call(handleOrdersLoad, token);
  } catch (error) {
    yield put({ type: types.LOGIN_ERROR, error });
  } finally {
    if (yield cancelled()) {
      yield put({ type: types.LOGIN_CANCELLED });
    }
  }
}

export function* logoutSaga() {
  try {
    yield put(actions.logOut);
  } catch (error) {
    console.log(error);
  }
}
