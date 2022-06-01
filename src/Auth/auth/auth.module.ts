import { TeacherService } from './../../Services/teacher.service';
import { Teacher } from './../../Models/teacher.entity';
import { TeacherModule } from './../../Modules/teacher.module';
import { Admin } from '../../Models/admin.entity';
import { LocalStrategy } from '../local.strategy';
import { UserService } from '../../Services/user.service';
import { jwtConstants } from './constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../Models/user.entity';
import { UserModule } from '../../Modules/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../jwt.strategy';
import { AdminModule } from 'src/Modules/admin.module';
import { AdminService } from 'src/Services/admin.service';

@Module({
  imports: [
    PassportModule,
    TypeOrmModule.forFeature([User, Admin, Teacher]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1000s' },
    }),
  ],
  providers: [AuthService, UserService, AdminService, JwtStrategy, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
