import React, { useEffect } from 'react';

import { useNavContext } from './StateManagement/provider';
import * as navActions from './StateManagement/action.js';

const Nav = () => {

  const { state: navReducer, dispatch: dispatchNav } = useNavContext();

  useEffect(() => {
    dispatchNav(navActions.navInitSuccess(true));
  }, [])

  return  (
    <>
      This is Nav Section
    </>
  )
}

export default Nav;
