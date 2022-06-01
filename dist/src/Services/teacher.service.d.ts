import { Repository } from 'typeorm';
import { Teacher } from '../Models/teacher.entity';
export declare class TeacherService {
    private teachersRepository;
    constructor(teachersRepository: Repository<Teacher>);
    createSudent(obj: Teacher): Teacher;
    createUser(obj: Teacher): Teacher;
    findAll(): Promise<Teacher[]>;
    findOne(id: any): Promise<Teacher>;
    remove(id: number): Promise<void>;
}
