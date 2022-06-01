import { Repository } from 'typeorm';
import { Student } from '../Models/student.entity';
export declare class StudentService {
    private studentsRepository;
    constructor(studentsRepository: Repository<Student>);
    createSudent(obj: Student): Student;
    findAll(): Promise<Student[]>;
    findOne(id: any): Promise<Student>;
    remove(id: number): Promise<void>;
}
