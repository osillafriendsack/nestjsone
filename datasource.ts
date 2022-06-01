// import { Teacher } from './dist/Teacher/teacher.entity';
// import { Student } from './dist/Student/student.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nestjstestdb',
  entities: ['dist/src/Models/*.entity.js'],
  migrations: ['dist/Migration/*.js'],
});
