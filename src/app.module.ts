import { AdminModule } from './Modules/admin.module';
import { AdminService } from './Services/admin.service';
import { AdminController } from './Controllers/admin.controller';
import { UserController } from './Controllers/user.controller';
import { TeacherModule } from './Modules/teacher.module';
import { StudentModule } from './Modules/student.module';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth/auth.module';
import { UserModule } from './Modules/user.module';
import { LoggerMiddleware } from './Middleware/logger.middleware';
@Module({
  imports: [
    AdminModule,
    UserModule,
    StudentModule,
    TeacherModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nestjstestdb',
      entities: ['dist/src/Models/*.entity.js'],
      // autoLoadEntities: true,
      synchronize: true,
      migrations: ['dist/Migration/*.js'],
    }),
 
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '/api/user', method: RequestMethod.POST });
  }
}
