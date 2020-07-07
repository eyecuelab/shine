// import axios from 'axios';
import * as actions from '../actions';
import * as types from '../actions/types';
import { loginService } from '../services/authService';
import { call, put, cancelled } from 'redux-saga/effects';

// function loginApi(authParams) {
//   return axios.post(`https://shoeshine.herokuapp.com/login`, {
//     email: authParams.email,
//     password: authParams.password,
//   });
// }

// export function* loginSaga(action) {
//   try {
//     let data = yield call(loginService, action.payload);
//     // console.log('DATA: ', data);
//     const token = data.data.attributes.token;
//     const profile = data.included[0].attributes;

//     yield put(
//       actions.logIn({
//         token: token,
//         profile: profile,
//       }),
//     );
//   } catch (error) {
//     yield put({ type: types.LOGIN_ERROR, error: error.message });
//   } finally {
//     if (yield cancelled()) {
//       yield put({ type: types.LOGIN_CANCELLED });
//     }
//   }
// }

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
    console.log('E', error);
    yield put({ type: types.LOGIN_ERROR, error: error.status });
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
