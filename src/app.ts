import express from 'express';
import apolloServer from './graphql';

const port = Number(process.env.PORT);

const app = express();

const start = async (port: number): Promise<void> => {
  (await apolloServer()).applyMiddleware({ app, path: '/graphql' });

  return new Promise<void>((resolve) => {
    app.listen(port, async () => {
      console.log(`Application listening at port ${port}`);
      resolve();
    });
  });
};

start(port);
