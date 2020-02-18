import { Injectable } from '@angular/core';
import {Observable, throwError } from 'rxjs';
import {LoginModel} from '../../views/pages/auth/auth.model';
import {HttpBackend, HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {DoctorsModel} from '../../views/pages/doctors/doctors.model';
import {PatientsModel} from '../../views/pages/patients/patients.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private http: HttpClient,
    private handler: HttpBackend,
    ) { }

  public GetPatients(): Observable<any> {
    const endPoint = '/v1/users/patient';
    const url = environment.production ? environment.prodHost + endPoint : environment.localhost + endPoint;
    console.log('url: ');
    return this.http.get<DoctorsModel>(url)
      .pipe(map(item => item))
      .pipe(catchError(this.handleError));
  }

 public CreatePatient(user: PatientsModel): Observable<any> {
    const endPoint = '/v1/users/patient';
    const url = environment.production ? environment.prodHost + endPoint : environment.localhost + endPoint;
    console.log('url: ');
    return this.http.post<PatientsModel>(url, user)
      .pipe(map(item => item))
      .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      // console.error('An error occurred:', error.error.message);
      console.error('An error occurred:', error.error.message);
      return throwError(`${JSON.stringify(error.error.message)}`);
    } else {
      console.error('An error occurred:', error);
      console.error('An error occurred:', error.error.message);
      return throwError(`${JSON.stringify(error.error.message)}`);
    }
  }

}
