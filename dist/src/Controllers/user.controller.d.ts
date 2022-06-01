import { Teachercreate } from './../InputValidationPipes/teachercreate.dto';
import { Loginvalidate } from './../InputValidationPipes/loginvalidate.dto';
import { AuthService } from './../Auth/auth/auth.service';
import { UserService } from 'src/Services/user.service';
import { Usercreate } from 'src/InputValidationPipes/usercreate.dto';
export declare class UserController {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    getAllStudents(): Promise<import("../Models/user.entity").User[]>;
    getaStudents(id: number): Promise<import("../Models/user.entity").User>;
    createStudent(student: Usercreate): Promise<import("../Models/user.entity").User[]>;
    createTeacher(req: any, body: Teachercreate): Promise<import("../Models/teacher.entity").Teacher>;
    login(req: Loginvalidate): Promise<{
        access_token: string;
        user: any;
        decode: string | {
            [key: string]: any;
        };
    }>;
}
