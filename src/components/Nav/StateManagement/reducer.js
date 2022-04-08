/* lib */
import { updateObject } from '../../Lib/Utility/Utility';
import { navState } from '../../Lib/initStates/nav';

/* Others */
import * as ActionTypes from './actionType';

export const navInit = (state, action) => {
  return updateObject(state, {
    nav: action.data,
  });
};

export const navInitSuccess = (state, action) => {
  return updateObject(state, {
    isNavInitSuccess: action.data,
  });
};

export const navInitReset = () => {
  return { ...navState };
};

const navReducer = (state, action) => {
  switch (action.type) {

    case ActionTypes.NAVIGATION_INIT:
      return navInit(state, action);

    case ActionTypes.NAVIGATION_INIT_SUCCESS:
      return navInitSuccess(state, action);

    case ActionTypes.NAVIGATION_INIT_RESET:
      return navInitReset();

    default:
      return state;
  }
};

export default navReducer;
