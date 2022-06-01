import { MigrationInterface, QueryRunner } from 'typeorm';

export class addPasswordMigration1653431634903 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `student` ADD `password` varchar(255)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `student` REMOVE `password`');
  }
}
