/* lib */
import { updateObject } from '../../Utility/Utility';
import { authState } from '../../initStates/auth';

/* Others */
import * as ActionTypes from '../actionTypes';

export const authInit = (state, action) => {
  return updateObject(state, {
    auth: action.data,
  });
};

export const authInitSuccess = (state, action) => {
  return updateObject(state, {
    isAuthInitSuccess: action.data,
  });
};

export const authInitReset = () => {
  return { ...authState };
};

const authReducer = (state, action) => {
  switch (action.type) {

    case ActionTypes.AUTH_INIT:
      return authInit(state, action);

    case ActionTypes.AUTH_INIT_SUCCESS:
      return authInitSuccess(state, action);

    case ActionTypes.AUTH_INIT_RESET:
      return authInitReset();

    default:
      return state;
  }
};

export default authReducer;
