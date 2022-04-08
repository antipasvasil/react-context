import { combineProviders } from '../Utility/combineProviders';

/* Root */
import { HomeProvider } from './Providers/Home';
import { AuthProvider } from './Providers/Auth';

const providers = [
  HomeProvider,
  AuthProvider
];

export const AppContextProvider = combineProviders(...providers);