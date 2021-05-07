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
  useContainer(Container);
  return createConnection({ ...options, entities })
    .then((connection) => {
      console.log(`Database connected succesfully`);
      return connection;
    })
    .catch((err: Error) => {
      console.error(err.message);
      throw err.message;
    });
};

export default createDbConnection;
