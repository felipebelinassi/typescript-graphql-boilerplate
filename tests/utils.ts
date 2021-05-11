import path from 'path';
import { Container } from 'typedi';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { Connection, ConnectionOptions, useContainer } from 'typeorm';
import { dbEntities } from '../src/entities';
import createDbConnection from '../src/database';

const testDbConfig: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  username: 'postgres-test',
  password: 'postgrestest@2020',
  database: 'test',
  port: 5435,
};

export const createTestConnection = (): Promise<Connection> => {
  useContainer(Container);
  return createDbConnection({ ...testDbConfig, entities: dbEntities });
};

export const clearTestDb = async (connection: Connection) => {
  const entities = connection.entityMetadatas;

  for (const entity of entities) {
    const repository = connection.getRepository(entity.name);
    await repository.query(`DELETE FROM ${entity.tableName};`);
    await repository.query(
      `ALTER SEQUENCE ${entity.tableName}_id_seq RESTART WITH 1`
    );
  }
};

export const createTestServer = async () => {
  const resolvers = path.join(
    __dirname,
    '../src/graphql/resolvers/**/index.{ts,js}'
  );

  const apolloSchema = await buildSchema({
    resolvers: [resolvers],
    container: Container,
  });

  return new ApolloServer({
    schema: apolloSchema,
  });
};
