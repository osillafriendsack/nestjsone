import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateLastnameMigration1653432509086
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `student` CHANGE COLUMN `newLastName` `lastName` varchar(20)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `student` CHANGE COLUMN `lastName` `newLastName` varchar(20)',
    );
  }
}
