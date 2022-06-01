import { TeacherModule } from './teacher.module';
import { Teacher } from './../Models/teacher.entity';
import { TeacherService } from './../Services/teacher.service';
import { AuthModule } from './../Auth/auth/auth.module';
import { Module } from '@nestjs/common';
import { UserService } from './../Services/user.service';
import { UserController } from './../Controllers/user.controller';
import { User } from './../Models/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

/*
https://docs.nestjs.com/modules
*/


@Module({
  imports: [
  AuthModule,
  TypeOrmModule.forFeature([User, Teacher])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
