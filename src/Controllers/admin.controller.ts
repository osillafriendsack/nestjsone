import { Auth } from './../Decorators/auth.decorator';
import { AuthService } from './../Auth/auth/auth.service';
import { JwtAuthGuard } from '../Auth/auth/jwt-auth.guard';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AdminService } from 'src/Services/admin.service';
import { Roles } from 'src/Decorators/roles.decorator';
import { Role } from 'src/Helpers/role.enum';
import { RolesGuard } from 'src/Guards/roles.guard';

@Controller('/api/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService, private authService: AuthService) {}

  @Get()
  getAllAdmins() {
    return this.adminService.findAll();
  }

  @Get(':id')
  getanAdmin(@Param('id') id: number) {
    return this.adminService.findOne(id);
  }

//   @Roles(Role.ADMIN) // this is just like a metadata that gets added to the request to enable u make decisions in your gaurds 
//   @UseGuards(JwtAuthGuard, RolesGuard)  // add your guard here then access the metadata to know maybe its a user or an admin
  
  @Auth(Role.ADMIN)
  @Post()
  createAdmin(@Body() student) {
    return this.adminService.createSudent(student);
  }

  @Post('auth/login')
  async login(@Body() req) {
    return this.authService.login(req, Role.ADMIN);
  }

  
}