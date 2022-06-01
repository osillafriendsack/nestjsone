import { Injectable , UnauthorizedException} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {


   
  handleRequest(err, user, info) {
    // You can throw an exception based on either "info" or "err" arguments
    console.log(info)
    console.log(err)
    if (err || !user) {
      throw err || new UnauthorizedException();
    //   throw err 
      return 'there was an error'
    }
    return user;
  }

}
