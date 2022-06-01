import { JwtAuthGuard } from './auth/auth/jwt-auth.guard';
import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth/auth/auth.service';

@Controller()
export class AppController {
  constructor() {}
  @Get()
  async welcome() {
    return 'hello world';
  }
  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // async login(@Body() req) {
  //   return this.authService.login(req);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get('auth/user')
  // getUserInfo(@Request() req) {
  //   return req.user;
  // }
}
