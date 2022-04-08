import React from 'react';

import { useAuthContext } from '../Lib/Store/Providers/Auth';
import * as authActions from '../Lib/Store/Actions/auth';

const Auth = () => {

  const { state: authReducer, dispatch: dispatchAuth } = useAuthContext();

  return  (
    <>
      This is Auth Page
    </>
  )
}

export default Auth;
