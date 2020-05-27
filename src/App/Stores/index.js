import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './Sagas';
import appReducer from './Reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);
sagaMiddleware.run(rootSaga);
export default store;
