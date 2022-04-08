/* lib */
import { updateObject } from '../../Utility/Utility';
import { homeState } from '../../initStates/home';

/* Others */
import * as ActionTypes from '../actionTypes';

export const homeInitSuccess = (state, action) => {
  return updateObject(state, {
    isHomeInitSuccess: action.data,
  });
};

export const homeInitReset = () => {
  return { ...homeState };
};

const homeReducer = (state, action) => {
  switch (action.type) {

    case ActionTypes.HOME_INIT_SUCCESS:
      return homeInitSuccess(state, action);

    case ActionTypes.HOME_INIT_RESET:
      return homeInitReset();

    default:
      return state;
  }
};

export default homeReducer;
