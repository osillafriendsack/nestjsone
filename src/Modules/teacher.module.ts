import { AuthModule } from './../auth/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherController } from '../Controllers/teacher.controller';
import { TeacherService } from '../Services/teacher.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Teacher } from '../Models/teacher.entity';

@Module({
  imports: [
  AuthModule,
  TypeOrmModule.forFeature([Teacher])],
  controllers: [TeacherController],
  providers: [TeacherService],
  // exports: [TeacherModule],
})
export class TeacherModule {}
