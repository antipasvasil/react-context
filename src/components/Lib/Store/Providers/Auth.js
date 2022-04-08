import React, { useEffect, useReducer, useContext } from "react";

/* Type */
import { methods } from "../../Utility/constants";
import { Logger } from '../../Utility/Utility';
import { fetcher } from '../../Utility/fetcher';

import * as authActions from '../Actions/auth';
import reducer from '../Reducers/Auth';
import { authState } from '../../initStates/auth';

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {

  const [state, dispatch] = useReducer(Logger(reducer), authState);

  const initData = async () => {
    const url = 'https://api.github.com/users/antipasvasil'

    try {
      const response = await fetcher(url, null, methods.get);

      if (!response.ok) {
        dispatch(authActions.authInitSuccess(false));
        console.log('====================================');
        console.log(response);
        console.log('====================================');
      } else {
        dispatch(authActions.authInit(response.data));
        dispatch(authActions.authInitSuccess(true));
      }

      
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  }

  useEffect(() => {
    initData();
  }, [])

  return (
    <AuthContext.Provider value={{
      state,
      dispatch,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
