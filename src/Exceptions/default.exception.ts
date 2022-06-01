
/*
https://docs.nestjs.com/exception-filters#custom-exceptions
*/

import { HttpException, HttpStatus } from "@nestjs/common";

export class DefaultException extends HttpException {
  constructor() {

    super("Default", HttpStatus.I_AM_A_TEAPOT);
  }
}
