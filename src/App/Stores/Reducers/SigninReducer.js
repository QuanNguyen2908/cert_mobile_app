import {AnyAction, Reducer} from 'redux';
import * as types from './../Constants/ActionType';
import {initialRequestState} from './../state';

export const SigninReducer = (state = initialRequestState, action) => {
  switch (action.type) {
    case types.GET_SIGNIN_ATTEMPT: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case types.GET_SIGNIN_SUCCESS: {
      return {
        ...state,
        data: action.data,
        isFetching: false,
        error: '',
      };
    }
    case types.GET_SIGNIN_FAIL: {
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};
