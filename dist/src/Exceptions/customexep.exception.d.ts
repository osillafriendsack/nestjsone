import { HttpException, HttpStatus } from "@nestjs/common";
export declare class CustomexepException extends HttpException {
    private error;
    private statuscode;
    constructor(error: string, statuscode: HttpStatus);
}
