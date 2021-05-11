import { Connection } from 'typeorm';
import { createTestClient } from 'apollo-server-testing';
import { getPetsQuery } from './__gql__/queries';
import {
  createTestConnection,
  createTestServer,
  clearTestDb,
} from '../../utils';
import Pets from '../../../src/entities/Pets';

let testConnection: Connection;

beforeAll(async () => {
  testConnection = await createTestConnection();
});

beforeEach(async () => {
  await clearTestDb(testConnection);
});

afterAll(async () => {
  await testConnection.close();
});

describe('Get Pets', () => {
  it('should return empty array if no pets are registered', async () => {
    const apolloServer = await createTestServer();
    const { query } = createTestClient(apolloServer);

    const res = await query({
      query: getPetsQuery,
    });
    expect(res).toMatchSnapshot('Empty pets list');
  });

  it('should return array with one registered pet', async () => {
    const pet = {
      id: 1,
      name: 'Test dog',
      breed: 'Tester',
      species: 'Canine',
      birthDate: '2021-05-07',
    };

    await testConnection.getRepository(Pets).save(pet);

    const apolloServer = await createTestServer();
    const { query } = createTestClient(apolloServer);

    const res = await query({
      query: getPetsQuery,
    });
    expect(res).toMatchSnapshot('Filled pets list');
  });
});
