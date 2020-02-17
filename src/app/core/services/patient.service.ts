import { Injectable } from '@angular/core';
import {Observable, throwError } from 'rxjs';
import {LoginModel} from '../../views/pages/auth/auth.model';
import {HttpBackend, HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private http: HttpClient,
    private handler: HttpBackend,
    ) { }


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
