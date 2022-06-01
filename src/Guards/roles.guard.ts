import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { CustomexepException } from 'src/Exceptions/customexep.exception';

import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '../Helpers/role.enum';
// import { User } from '../models/';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

     // if no metadata on the route handler we assume to route is open for all, else 
    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    const classname = context.getClass().name.split('Controller')[0].toLowerCase();

    console.log(classname)
    console.log(user)
    console.log(requiredRoles)

    if(user?.role != classname) {

        // throw new UnauthorizedException()
        throw new CustomexepException('This jwt belongs to another  user role and not your current role', HttpStatus.UNAUTHORIZED)
    }
    
    return requiredRoles.some((role) => classname?.includes(role));  // this returns true of false

    // if the class calling it is user then the person is autorised go ahead and create a token if it is admin it is autorised go ahedad and create a token else false


  }
}