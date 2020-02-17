import { Injectable } from '@angular/core';
import {Observable, throwError } from 'rxjs';
import {LoginModel} from '../../views/pages/auth/auth.model';
import {HttpBackend, HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(
    private http: HttpClient,
    private handler: HttpBackend,
    ) { }

  public CreateDoctor(user): Observable<any> {
    const endPoint = 'auth/login';
    const url = environment.production ? environment.prodHost + endPoint : environment.localhost + endPoint ;
    console.log(url);
    return this.http.post<LoginModel>(url, user)
      .pipe(map(item => item))
      .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      // console.error('An error occurred:', error.error.message);
      console.error('An error occurred:', error.error);
      return throwError(`${JSON.stringify(error.error.message)}`);
    } else {
      console.error('An error occurred:', error);
      return throwError(`${JSON.stringify(error.message)}`);
    }
  }

}
