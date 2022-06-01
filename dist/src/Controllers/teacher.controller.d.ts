import { TeacherService } from '../Services/teacher.service';
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    getAllStudents(): Promise<import("../Models/teacher.entity").Teacher[]>;
    getaStudents(id: number): Promise<import("../Models/teacher.entity").Teacher>;
    createStudent(teacher: any): import("../Models/teacher.entity").Teacher;
}
