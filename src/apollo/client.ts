import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { API_URL } from '../config/constants';

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: API_URL,
  }),
});
