"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nestjstestdb',
    entities: ['dist/src/Models/*.entity.js'],
    migrations: ['dist/Migration/*.js'],
});
//# sourceMappingURL=datasource.js.map