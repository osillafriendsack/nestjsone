import { AuthService } from './../Auth/auth/auth.service';
import { AdminService } from 'src/Services/admin.service';
export declare class AdminController {
    private readonly adminService;
    private authService;
    constructor(adminService: AdminService, authService: AuthService);
    getAllAdmins(): Promise<import("../Models/admin.entity").Admin[]>;
    getanAdmin(id: number): Promise<import("../Models/admin.entity").Admin>;
    createAdmin(student: any): import("../Models/admin.entity").Admin;
    login(req: any): Promise<{
        access_token: string;
        user: any;
        decode: string | {
            [key: string]: any;
        };
    }>;
}
