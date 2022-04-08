import React, { useReducer, useContext } from "react";

import { Logger } from '../../Lib/Utility/Utility';
// import * as navActions from '../StateManagement/action';
import reducer from './reducer';
import { navState } from '../../Lib/initStates/nav';

export const NavContext = React.createContext();
export const NavProvider = ({ children }) => {

  const [state, dispatch] = useReducer(Logger(reducer), navState);

  return (
    <NavContext.Provider value={{
      state,
      dispatch,
    }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => {
  return useContext(NavContext);
};
