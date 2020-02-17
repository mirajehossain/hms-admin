import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor() { }
  intercept(httpReq: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token != null) {
      const req = httpReq.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
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
