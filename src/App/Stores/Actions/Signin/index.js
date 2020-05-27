import * as types from './../../Constants/ActionType';
export const getAuth = (email, password) => ({
  type: types.GET_SIGNIN,
  email,
  password,
});
