import { User } from './user.entity';
export declare class Teacher {
    id: number;
    firstName: string;
    lastName: string;
    password: string;
    isActive: boolean;
    user: User;
}
