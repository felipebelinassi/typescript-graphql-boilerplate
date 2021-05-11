import { Connection } from 'typeorm';
import { createTestClient } from 'apollo-server-testing';
import { createPetMutation } from './__gql__/mutations';
import {
  createTestConnection,
  createTestServer,
  clearTestDb,
} from '../../utils';

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

describe('Create Pets', () => {
  it('should register a new pet in the database', async () => {
    const petInput = {
      name: 'Test dog',
      breed: 'Tester',
      species: 'Canine',
      birthDate: '2021-05-07',
    };

    const apolloServer = await createTestServer();
    const { query } = createTestClient(apolloServer);

    const res = await query({
      query: createPetMutation,
      variables: petInput,
    });
    expect(res).toMatchSnapshot('New pet');
  });
});
