import { MigrationInterface, QueryRunner } from 'typeorm';

export class userMigration1653425203582 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `student` CHANGE COLUMN `newLastName` `lastName` varchar(20)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `student` CHANGE COLUMN `newLastName` `lastName` varchar(20)',
    );
  }
}
