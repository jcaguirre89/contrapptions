import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { RestLink } from 'apollo-link-rest';
import { endpoint } from '../config';

if (global.Headers == null) {
  global.Headers = require('fetch-headers');
}

const restLink = new RestLink({
  uri: 'http://localhost:8000/api/',
  // credentials included in cooklie in request
  credentials: 'include',
});

function createClient({ ctx, headers, initialState }) {
  return new ApolloClient({
    link: restLink,
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default withApollo(createClient);
