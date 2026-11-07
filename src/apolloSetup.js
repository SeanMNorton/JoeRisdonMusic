import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';
import band from './config/band';

export default () => new ApolloClient({
  link: new HttpLink({
    uri: band.hygraphUrl,
  }),
  cache: new InMemoryCache(),
});
