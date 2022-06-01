import { Admin } from 'src/Models/admin.entity';
import { Repository } from 'typeorm';
export declare class AdminService {
    private adminsRepository;
    constructor(adminsRepository: Repository<Admin>);
    createSudent(obj: Admin): Admin;
    findAll(): Promise<Admin[]>;
    findOne(id: any): Promise<Admin>;
    remove(id: number): Promise<void>;
}
