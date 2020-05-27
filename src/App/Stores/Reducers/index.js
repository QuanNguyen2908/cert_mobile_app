import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {SigninReducer} from './SigninReducer';
const appReducer = combineReducers({
  form: formReducer,
  signin: SigninReducer,
});
export default appReducer;
