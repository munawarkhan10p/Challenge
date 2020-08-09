import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../apollo/client';


import AppRoute from './App.Route';

function App(): JSX.Element {
  return (
  <ApolloProvider client={apolloClient}>
      <AppRoute />
  </ApolloProvider>
    
  );
}

export default App;
