import express from 'express';
import config from './config';
import apolloServer from './graphql';
import createDbConnection from './database';
import { ConnectionOptions } from 'typeorm';

const { port, database } = config;

const app = express();

const start = async (port: number): Promise<void> => {
  (await apolloServer()).applyMiddleware({ app, path: '/graphql' });
  await createDbConnection(database as ConnectionOptions);

  return new Promise<void>((resolve) => {
    app.listen(port, async () => {
      console.log(`Application listening at port ${port}`);
      resolve();
    });
  });
};

start(port);
