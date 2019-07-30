const { GraphQLServer } = require('graphql-yoga');
const Query = require('../resolvers/Query');
const Mutation = require('../resolvers/Mutation');
require('dotenv').config({ path: '.env' });

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: { Query, Mutation },
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  deets => {
    console.log(`Server is now running on
    http://localhost:${deets.port}`);
  }
);
