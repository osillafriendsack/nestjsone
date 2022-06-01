import { Teachercreate } from './../InputValidationPipes/teachercreate.dto';
import { Auth } from './../Decorators/auth.decorator';
import { Loginvalidate } from './../InputValidationPipes/loginvalidate.dto';
import { AuthService } from './../Auth/auth/auth.service';
import { Role } from './../Helpers/role.enum';
import { Roles } from './../Decorators/roles.decorator';
import { JwtAuthGuard } from '../Auth/auth/jwt-auth.guard';
import { Body, ClassSerializerInterceptor, Controller, Get, Headers, HostParam, Ip, Param, Post, Request, UseGuards, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { UserService } from 'src/Services/user.service';
import { RolesGuard } from 'src/Guards/roles.guard';
import { Usercreate } from 'src/InputValidationPipes/usercreate.dto';

@Controller('/api/user')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly userService: UserService, private readonly authService: AuthService) {}

  @Get()
  getAllStudents() {
    return this.userService.findAll();
  }

  @Get(':id')
  getaStudents(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  // @UseGuards(JwtAuthGuard)
  // @Post()
  // createStudent(@Body() student) {
  //   return this.userService.createSudent(student);
  // }


  // @Roles(Role.USER) // this is just like a metadata that gets added to the request to enable u make decisions in your gaurds 
  // @UseGuards(JwtAuthGuard, RolesGuard)  // add your guard here then access the metadata to know maybe its a user or an admin
  
  @Auth(Role.USER)
  @Post()
  createStudent(@Body(new ValidationPipe()) student: Usercreate) {

    console.log(student)
    // return student;
    return this.userService.createSudent(student);
  }

  @Auth(Role.USER)
  @Post('/createteacher')
  createTeacher(@Request() req, @Body(new ValidationPipe()) body : Teachercreate) {
    // console.log(req)
    return this.userService.createTeacher(req);
  }


  // @Req() request: Request
  @Post('auth/login')
  async login(@Body(new ValidationPipe()) req : Loginvalidate) {

   return this.authService.login(req, Role.USER);

  }

}
