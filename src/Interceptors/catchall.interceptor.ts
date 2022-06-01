/*
https://docs.nestjs.com/interceptors#interceptors
*/

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  RequestTimeoutException,
} from "@nestjs/common";
import { Observable, throwError, TimeoutError } from "rxjs";
import { tap , catchError } from "rxjs/operators";

@Injectable()
export class CatchallInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("Before...");
    return next.handle().pipe(
      
      tap(() => {

        catchError(err => throwError(() => new RequestTimeoutException()))
        
      })
      
      // catchError(err => {
      //   // if (err instanceof TimeoutError) {
      //   //   return throwError(() => new RequestTimeoutException());
      //   // }
      //   // return throwError(() => err);
      //   catchError(err => throwError(() => new RequestTimeoutException()))
      // }),

      // catchError(err => throwError(() => new RequestTimeoutException()))

      );
  }
}
