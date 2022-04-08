import React, { useEffect } from 'react';

import { useHomeContext } from '../Lib/Store/Providers/Home';
import * as homeActions from '../Lib/Store/Actions/home';

const Home = () => {
  const { state: homeReducer, dispatch: dispatchHome } = useHomeContext();

  useEffect(() => {
    if (homeReducer.isHomeInitSuccess) {
      dispatchHome(homeActions.homeInitReset());
    }
  }, [homeReducer.isHomeInitSuccess, homeReducer])

  return  (
    <>
      This is Home Page
    </>
  )
}

export default Home;
