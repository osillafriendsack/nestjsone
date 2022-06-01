"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPasswordMigration1653431634903 = void 0;
class addPasswordMigration1653431634903 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `student` ADD `password` varchar(255)');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `student` REMOVE `password`');
    }
}
exports.addPasswordMigration1653431634903 = addPasswordMigration1653431634903;
//# sourceMappingURL=1653431634903-addPasswordMigration.js.map