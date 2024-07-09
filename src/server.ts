/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { type Application } from 'express';
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/typeDefs';

const envFile =
  process.env.NODE_ENV === 'production'
    ? '.env.production'
    : process.env.NODE_ENV === 'test'
      ? '.env.test'
      : '.env.development';
dotenv.config({ path: envFile });
const app: Application = express();
app.use(cors());

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

async function start() {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app as any });

  const port = process.env.PORT;
  const PORT = port ?? '4000';
  app.listen(PORT, () => {
    console.log(
      `Server ready http://localhost:${PORT}${apolloServer.graphqlPath}`,
    );
  });
}

start().catch((error) => {
  console.error('Error starting the server:', error);
});
