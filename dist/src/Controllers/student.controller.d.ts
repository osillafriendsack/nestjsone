import { Student } from '../Models/student.entity';
import { StudentService } from '../Services/student.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getAllStudents(): Promise<Student[]>;
    getaStudents(id: number): Promise<Student>;
    createStudent(student: any): Student;
}
