import * as ActionTypes  from './actionType';

export const navInit = () => {
  return {
    type: ActionTypes.NAVIGATION_INIT
  };
};

export const navInitSuccess = (data) => {
  return {
    type: ActionTypes.NAVIGATION_INIT_SUCCESS,
    data,
  };
};

export const navInitReset = () => {
  return {
    type: ActionTypes.NAVIGATION_INIT_RESET,
  };
};
