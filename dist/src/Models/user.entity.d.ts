import { Teacher } from './teacher.entity';
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    password: string;
    isActive: boolean;
    teachers: Teacher[];
}
