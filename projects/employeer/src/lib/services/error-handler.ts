import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
 
import { Observable } from 'rxjs';

import {map} from 'rxjs/operators';

 
// @Injectable()
// export class RequestInterceptor implements HttpInterceptor {
 
//   constructor() {}
 
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     return next.handle(request).do((event: HttpEvent<any>) => {}, (err: any) => {
//       if (err instanceof HttpErrorResponse) {
//         // do error handling here
//       }
//     });
//   }
// }
