import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './Sagas';

import appReducer from './Reducers';
const initialAppState = {};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
  initialAppState,
);
sagaMiddleware.run(rootSaga);
console.log(store);
export default store;
