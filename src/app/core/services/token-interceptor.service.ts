import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor() { }
  intercept(httpReq: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user != null) {
      console.log('user.token: ', user.accessToken);
      const req = httpReq.clone({
        setHeaders: {
          Authorization: 'Bearer ' + user.accessToken,
          'Content-Type': 'application/json'
        }
      });
      return next.handle(req);
    } else {
      const req = httpReq.clone({
        headers: httpReq.headers.set('Content-Type', 'application/json')
      });
      return next.handle(req);
    }
  }
}
