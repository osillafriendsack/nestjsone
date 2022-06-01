import { Teacher } from './../Models/teacher.entity';
import { AuthModule } from './../Auth/auth/auth.module';
import { AdminController } from './../Controllers/admin.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from '../Models/admin.entity';
import { AdminService } from 'src/Services/admin.service';

@Module({
  imports: [
  AuthModule,
  TypeOrmModule.forFeature([Admin])],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule {}
