import { CustomexepException } from '../../Exceptions/customexep.exception';
import { AdminService } from 'src/Services/admin.service';
import { UserService } from '../../Services/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


import { Injectable, NotFoundException, HttpStatus, ArgumentsHost, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private adminService: AdminService,
    private jwtService: JwtService,
    
  )
  
  {

  }

  async validateUser(id: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(id);
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }

  async login(req: any, classname: string) {

    // this.validateUser(req.id, req.password)

  //  let  ctx : ExecutionContext;

  //  let classname =  ctx.getClass().name.split('Controller')[0].toLowerCase();

  //     console.log(classname)

    console.log(classname)

    if(classname == 'user') {

     return this.checklogin(this.usersService, req, classname)

    }


    if(classname == 'admin') {
      return this.checklogin(this.adminService, req, classname)
    }

    
  
  }




  async checklogin(usertype: any, req: any, classname: string) {

     // userService 
    const user = await usertype.findOne(req.id);

    console.log(user)

    if (!user) {
      throw  new  NotFoundException();
    }

    const isMatch = await bcrypt.compare(req.password, user.password);
    if (!isMatch) {
    //  throw new Error("Invali Password");
   
    throw  new  CustomexepException('Invalid Password', HttpStatus.BAD_REQUEST);

    }
  

    if (user) {
      const payload = { username: user.firstName, sub: user.id , role: classname};
      return {
            access_token: this.jwtService.sign(payload),
            user: user, 
            decode : this.jwtService.decode(this.jwtService.sign(payload))
        };
    }

    return null;
    // return user;

  }
}
