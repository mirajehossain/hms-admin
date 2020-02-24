import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../../core/services/data.service';
import {ActivatedRoute} from '@angular/router';
import {UsersModel} from '../../users.model';
import {DoctorService} from '../../../../core/services/doctor.service';
import {PatientReports, PatientsModel} from '../patients.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  public patientId: string;
  public user: UsersModel;
  public patientReports: PatientReports[];
  public patient: PatientsModel = new PatientsModel();
  constructor(
    private activateRoute: ActivatedRoute,
    private dataService: DataService,
    private doctorApiService: DoctorService,
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.activateRoute.params.subscribe(params => {
      this.patientId = params.patientId;
    });
    if (this.user.userType === 'DOCTOR') {
      this.getPatientReportByDoctor(this.user._id, this.patientId);
    } else if (this.user.userType === 'ADMIN' || this.user.userType === 'PATIENT' ) {
      this.getPatientReportById(this.patientId);
    }
  }

  ngOnInit() {
    this.dataService.getPatientProfileData
      .subscribe(response => {
        this.patient = response;
        console.log('patient: ', response);
      });
  }

  getPatientReportByDoctor(doctorId, patientId) {
    this.doctorApiService.GetPatientReportByDoctor(doctorId, patientId)
      .subscribe(response => {
        console.log(response);
        if (response.success) {
          this.patientReports = response.data;
        }
      }, error => { console.log(error); });
  }

  getPatientReportById(patientId) {
    this.doctorApiService.GetPatientReportById(patientId)
      .subscribe(response => {
        console.log(response);
        if (response.success) {
          this.patientReports = response.data;
        }
      }, error => { console.log(error); });
  }
}
