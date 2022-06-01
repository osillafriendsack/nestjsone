/*
https://docs.nestjs.com/exception-filters#custom-exceptions
*/

import { HttpException, HttpStatus } from "@nestjs/common";

export class CustomexepException extends HttpException {
  constructor(private error: string, private statuscode: HttpStatus) {


      // super("Invalid Password", HttpStatus.BAD_REQUEST);
      super(error, statuscode);
   
  }
}
