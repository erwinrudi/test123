import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    // if this is a login-request the header is
    // already set to x/www/formurl/encoded.
    // so if we already have a content-type, do not
    // set it, but if we don't have one, set it to
    // default --> json
    if (!req.headers.has('Content-Type')) {
      if (!req.headers.has('Authorization')) {
        // Check if Request Header have Upload (For Upload)
        req = req.clone({
          headers: req.headers.set('Content-Type', 'application/json')
        });
      }
    }

    if (token) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      });
      // setting the accept header
      req = req.clone({
        headers: req.headers.set('Accept', 'application/json')
      });
    }

    // return next.handle(req);
    return next.handle(req).do(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
          // console.log(event);

        }
      },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          // Token Blacklist
        
        }
      }
    );
  }
}
