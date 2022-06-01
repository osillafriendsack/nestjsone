import { RolesGuard } from 'src/Guards/roles.guard';
import { JwtAuthGuard } from './../auth/auth/jwt-auth.guard';
import { Role } from './../Helpers/role.enum';
import { Roles } from './roles.decorator';

import { applyDecorators, UseGuards } from '@nestjs/common';

export function Auth(role: Role) {
  return applyDecorators(
    // SetMetadata('roles', roles),
    // UseGuards(AuthGuard, RolesGuard),
    // ApiBearerAuth(),
    // ApiUnauthorizedResponse({ description: 'Unauthorized' }),
    Roles(role),// this is just like a metadata that gets added to the request to enable u make decisions in your gaurds 
    UseGuards(JwtAuthGuard, RolesGuard)  // add your guard here then access the metadata to know maybe its a user or an admin
    
  );
}
// fount inside custom decorator nest js