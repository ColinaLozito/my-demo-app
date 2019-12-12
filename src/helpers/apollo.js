import ApolloClient from 'apollo-boost';

const conf = require('../../conf/conf');

const client = new ApolloClient({
  uri: conf.apolloInterface,
});

export default client;
