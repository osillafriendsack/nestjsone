import { IsEmail, IsInt, IsUUID, Length, Max, Min, MinLength } from "class-validator";

export class Loginvalidate {

    @IsUUID()
    id: string;

    // @IsInt()
    @MinLength(5)
    password: string;

}