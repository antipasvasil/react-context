import * as ActionTypes  from '../actionTypes';

export const authInit = (data) => {
  return {
    type: ActionTypes.AUTH_INIT,
    data
  };
};

export const authInitSuccess = (data) => {
  return {
    type: ActionTypes.AUTH_INIT_SUCCESS,
    data,
  };
};

export const authInitReset = () => {
  return {
    type: ActionTypes.AUTH_INIT_RESET,
  };
};
