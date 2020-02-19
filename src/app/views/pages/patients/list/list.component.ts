import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PatientService} from '../../../../core/services/patient.service';
import {PatientsModel} from '../patients.model';
import {UsersModel} from '../../users.model';
import {DataService} from '../../../../core/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public patients: PatientsModel[];
  public hasError = false;
  public errMessage: string;

  public user: UsersModel = new UsersModel();

  constructor(
    private patientApiService: PatientService,
    private dataService: DataService,
    private router: Router,
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user.userType === 'ADMIN') {
      this.getPatients();
    } else if (this.user.userType === 'DOCTOR') {
      this.getPatientsByDoctor(this.user._id);
    }
  }

  ngOnInit() {
  }

  getPatients() {
    this.patientApiService.GetPatients()
      .subscribe(response => {
        console.log('getPatients: ', response);
        if (response.success) {
          this.patients = response.data;
        }
      }, error => {
        this.hasError = true;
        this.errMessage = error;
      });
  }

  getPatientsByDoctor(doctorId?: string) {
    this.patientApiService.GetPatientsByDoctor(doctorId)
      .subscribe(response => {
        console.log('getPatientsByDoctor: ', response);
        if (response.success) {
          this.patients = response.data;
        }
      }, error => {
        this.hasError = true;
        this.errMessage = error;
      });
  }

  patientReport(patient) {
    this.dataService.updatePatientProfileData(patient);
    this.router.navigate(['/patients/reports/' + patient._id]);
  }

}
