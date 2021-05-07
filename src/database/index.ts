import {
  createConnection,
  Connection,
  ConnectionOptions,
  useContainer,
} from 'typeorm';
import { Container } from 'typedi';
import { dbEntities } from '../entities';

const createDbConnection = async (
  options: ConnectionOptions
): Promise<Connection> => {
  useContainer(Container);
<<<<<<< HEAD

=======
>>>>>>> bad4e4638d3839c97968412c19b96dea07755874
  return createConnection({ ...options, entities: dbEntities })
    .then((connection) => {
      return connection;
    })
    .catch((err: Error) => {
      console.error(err.message);
      throw err.message;
    });
};

export default createDbConnection;
