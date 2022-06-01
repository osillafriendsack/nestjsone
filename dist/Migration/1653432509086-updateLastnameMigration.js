"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLastnameMigration1653432509086 = void 0;
class updateLastnameMigration1653432509086 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `student` CHANGE COLUMN `newLastName` `lastName` varchar(20)');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `student` CHANGE COLUMN `lastName` `newLastName` varchar(20)');
    }
}
exports.updateLastnameMigration1653432509086 = updateLastnameMigration1653432509086;
//# sourceMappingURL=1653432509086-updateLastnameMigration.js.map