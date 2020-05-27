import {all, fork} from 'redux-saga/effects';
import {signinSaga} from './Signin';
export function* rootSaga() {
  yield all([fork(signinSaga)]);
}
