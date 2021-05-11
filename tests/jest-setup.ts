import { createTestConnection } from './utils';

export default async () => {
  const connection = await createTestConnection();

  console.log('Drop test DB');
  await connection.dropDatabase();
  console.log('Sync test DB');
  await connection.synchronize();

  await connection.close();
};
