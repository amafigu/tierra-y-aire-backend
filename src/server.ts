
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: envFile });

const app = express();
app.use(cors());

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

async function start() {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app as any });
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}${apolloServer.graphqlPath}`);
  });
}

start();
