import React, { useEffect, useReducer, useContext } from "react";

import { Logger } from '../../Utility/Utility';
import * as homeActions from '../Actions/home';
import reducer from '../Reducers/Home';
import { homeState } from '../../initStates/home';

export const HomeContext = React.createContext();
export const HomeProvider = ({ children }) => {

  const [state, dispatch] = useReducer(Logger(reducer), homeState);

  useEffect(() => {
    dispatch(homeActions.homeInitSuccess(true));
  }, [])

  return (
    <HomeContext.Provider value={{
      state,
      dispatch,
    }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  return useContext(HomeContext);
};
