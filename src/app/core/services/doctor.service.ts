import { Injectable } from '@angular/core';
import {Observable, throwError } from 'rxjs';
import {LoginModel} from '../../views/pages/auth/auth.model';
import {HttpBackend, HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {DoctorsModel, DoctorsReportModel} from '../../views/pages/doctors/doctors.model';
import {UsersModel} from '../../views/pages/users.model';
import {PatientReports} from '../../views/pages/patients/patients.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private customHttpClient: HttpClient;

  constructor(
    private http: HttpClient,
    private handler: HttpBackend,
    ) {
    this.customHttpClient = new HttpClient(handler);
  }

  public GetDoctors(): Observable<any> {
    const endPoint = '/v1/users/doctor';
    const url = environment.production ? environment.prodHost + endPoint : environment.localhost + endPoint;
    console.log('url: ');
    return this.http.get<DoctorsModel>(url)
      .pipe(map(item => item))
      .pipe(catchError(this.handleError));
  }

  public GetPatientReportByDoctor(doctorId, patientId): Observable<any> {
    const endPoint = `/v1/users/doctor/get-patient-report/${doctorId}/${patientId}`;
    const url = environment.production ? environment.prodHost + endPoint : environment.localhost + endPoint;
    console.log('url: ' + endPoint);
    return this.http.get<any>(url)
      .pipe(map(item => item))
      .pipe(catchError(this.handleError));
  }

  public GetPatientReportById(patientId): Observable<any> {
    const endPoint = `/v1/users/patient/get-patient-report/${patientId}`;
    const url = environment.production ? environment.prodHost + endPoint : environment.localhost + endPoint;
    console.log('url: ' + endPoint);
    return this.http.get<any>(url)
      .pipe(map(item => item))
      .pipe(catchError(this.handleError));
  }

  public GetDoctorReportById(doctorId): Observable<any> {
    const endPoint = `/v1/users/doctor/get-doctor-report/${doctorId}`;
    const url = environment.production ? environment.prodHost + endPoint : environment.localhost + endPoint;
    console.log('url: ' + endPoint);
    return this.http.get<any>(url)
      .pipe(map(item => item))
      .pipe(catchError(this.handleError));
  }

 public AddHistory(history: PatientReports): Observable<any> {
    const endPoint = '/v1/users/doctor/consult';
    const url = environment.production ? environment.prodHost + endPoint : environment.localhost + endPoint;
    console.log('url: ', endPoint);
    return this.http.post<PatientReports>(url, history)
      .pipe(map(item => item))
      .pipe(catchError(this.handleError));
  }

 public CreateDoctor(user: DoctorsModel): Observable<any> {
    const endPoint = '/v1/users/doctor';
    const url = environment.production ? environment.prodHost + endPoint : environment.localhost + endPoint;
    console.log('url: ', endPoint);
    return this.http.post<DoctorsModel>(url, user)
      .pipe(map(item => item))
      .pipe(catchError(this.handleError));
  }


  public UpdateProfile(user: UsersModel): Observable<any> {
    const endPoint = '/v1/users/update-profile/'+ user._id;
    const url = environment.production ? environment.prodHost + endPoint : environment.localhost + endPoint;
    console.log('url: ', endPoint);
    return this.http.patch<UsersModel>(url, user)
      .pipe(map(item => item))
      .pipe(catchError(this.handleError));
  }


 public GetUserProfile(userId): Observable<any> {
    const endPoint = '/v1/users/get-profile/' + userId;
    const url = environment.production ? environment.prodHost + endPoint : environment.localhost + endPoint;
    console.log('url: ', endPoint);
    return this.http.get<UsersModel>(url)
      .pipe(map(item => item))
      .pipe(catchError(this.handleError));
  }


  public UploadImage(userId, icon: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', icon, icon.name);
    const endPoint = '/v1/users/upload-image/' + userId;
    const url = environment.production ? environment.prodHost + endPoint : environment.localhost + endPoint;

    console.log(url);
    const user = JSON.parse(localStorage.getItem('user'));
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.accessToken,
      })
    };
    return this.customHttpClient.post<any>(url, formData, httpOptions)
      .pipe(map(item => item.data))
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
