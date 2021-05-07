import {
  createConnection,
  Connection,
  ConnectionOptions,
  useContainer,
} from 'typeorm';
import { Container } from 'typedi';
import entities from '../entities';

const createDbConnection = async (
  options: ConnectionOptions
): Promise<Connection> => {
  const entitiesArr = Object.values(entities);

  useContainer(Container);

  return createConnection({ ...options, entities: entitiesArr })
    .then((connection) => {
      return connection;
    })
    .catch((err: Error) => {
      console.error(err.message);
      throw err.message;
    });
};

export default createDbConnection;
