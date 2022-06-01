import { IsEmail, IsInt, Length, Max, Min, MinLength } from "class-validator";

export class Teachercreate {

    @MinLength(5)
    firstName: string;

    lastName: string;
  
    password: string;

}