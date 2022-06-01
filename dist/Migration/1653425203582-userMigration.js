"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMigration1653425203582 = void 0;
class userMigration1653425203582 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `student` CHANGE COLUMN `newLastName` `lastName` varchar(20)');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `student` CHANGE COLUMN `newLastName` `lastName` varchar(20)');
    }
}
exports.userMigration1653425203582 = userMigration1653425203582;
//# sourceMappingURL=1653425203582-userMigration.js.map