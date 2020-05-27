import {put, takeLatest} from 'redux-saga/effects';
import {getAuthFactory} from './../../Factories/signinFactories';
import * as types from './../../Constants/ActionType';

function* getAuth(action) {
  yield put({type: types.GET_SIGNIN_ATTEMPT});
  const {email, password} = action;
  try {
    const data = yield getAuthFactory(email, password);
    console.log('data signin', data);
    if (data) {
      yield put({type: types.GET_SIGNIN_SUCCESS, data});
    } else {
      yield put({type: types.GET_SIGNIN_FAIL, error: data.message});
    }
  } catch {}
}

export function* signinSaga() {
  yield takeLatest(types.GET_SIGNIN, getAuth);
}
