import { secretKeyAPI } from './../../../environments/env.api';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = req.headers
      .set('X-Api-Key', secretKeyAPI)

    const authReq = req.clone({ headers });
    return next.handle(authReq).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }
}
