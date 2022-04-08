import * as ActionTypes  from '../actionTypes';

export const homeInitSuccess = (data) => {
  return {
    type: ActionTypes.HOME_INIT_SUCCESS,
    data,
  };
};

export const homeInitReset = () => {
  return {
    type: ActionTypes.HOME_INIT_RESET,
  };
};
