import { HttpException, HttpStatus } from "@nestjs/common";
export declare class SwitchexcException extends HttpException {
    private error;
    private statuscode;
    constructor(error: string, statuscode: HttpStatus);
}
