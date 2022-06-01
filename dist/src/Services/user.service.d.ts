import { Teacher } from './../Models/teacher.entity';
import { User } from './../Models/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    private teacherRepository;
    constructor(userRepository: Repository<User>, teacherRepository: Repository<Teacher>);
    createSudent(obj: any): Promise<User[]>;
    createTeacher(obj: any): Promise<Teacher>;
    findAll(): Promise<User[]>;
    findOne(id: any): Promise<User>;
    remove(id: number): Promise<void>;
}
