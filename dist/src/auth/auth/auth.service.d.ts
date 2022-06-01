import { AdminService } from 'src/Services/admin.service';
import { UserService } from '../../Services/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private adminService;
    private jwtService;
    constructor(usersService: UserService, adminService: AdminService, jwtService: JwtService);
    validateUser(id: string, pass: string): Promise<any>;
    login(req: any, classname: string): Promise<{
        access_token: string;
        user: any;
        decode: string | {
            [key: string]: any;
        };
    }>;
    checklogin(usertype: any, req: any, classname: string): Promise<{
        access_token: string;
        user: any;
        decode: string | {
            [key: string]: any;
        };
    }>;
}
