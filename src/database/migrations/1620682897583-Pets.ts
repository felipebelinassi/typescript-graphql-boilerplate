import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class Pets1620682897583 implements MigrationInterface {
  public async up(queryRunner: QueryRunner) {
    await queryRunner.createTable(
      new Table({
        name: 'pets',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'text',
          },
          {
            name: 'breed',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'species',
            type: 'text',
          },
          {
            name: 'birth_date',
            type: 'date',
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            default: 'now()',
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner) {
    await queryRunner.dropTable('pets');
  }
}
