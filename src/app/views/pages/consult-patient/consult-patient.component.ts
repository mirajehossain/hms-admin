import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DoctorService} from '../../../core/services/doctor.service';
import {Router} from '@angular/router';
import {UsersModel} from '../users.model';
import {PatientService} from '../../../core/services/patient.service';
import {PatientsModel} from '../patients/patients.model';

@Component({
  selector: 'app-consult-patient',
  templateUrl: './consult-patient.component.html',
  styleUrls: ['./consult-patient.component.css']
})
export class ConsultPatientComponent implements OnInit {

  public patients: PatientsModel[];
  public consultForm: FormGroup;
  public hasError = false;
  public errMessage = '';
  public searchStr = '';

  public user: UsersModel = new UsersModel();
  constructor(
    private fb: FormBuilder,
    private doctorApiService: DoctorService,
    private patientApiService: PatientService,
    private router: Router,

  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
    this.getPatients();
    this.initPatientHistoryForm();
  }

  public addHistory(history) {
    this.doctorApiService.AddHistory(history)
      .subscribe(response => {
        if (response.success) {
          this.router.navigate(['/patients/list']);
          this.consultForm.reset();
        } else {
          this.hasError = true;
          this.errMessage = response.message;
        }
      }, error => {
        this.hasError = true;
        this.errMessage = error;
      });
  }

  public initPatientHistoryForm() {
    this.consultForm = this.fb.group({
      doctorId: [this.user._id, Validators.compose([
        Validators.required,
      ])],
      patientId: ['', Validators.compose([
        Validators.required,
      ])],
      historyType: ['', Validators.compose([
        Validators.required
      ])],
      symptoms: ['', Validators.compose([
        Validators.required
      ])],
      test: ['N/A', Validators.compose([
      ])],

      report: ['N/A', Validators.compose([
      ])],

      note: ['N/A', Validators.compose([
      ])],

      medicine: ['N/A', Validators.compose([
      ])],
      advise: ['N/A', Validators.compose([
      ])],
    });
  }
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.consultForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  public getPatients() {
    this.patientApiService.GetPatients()
      .subscribe(response => {
        console.log(response);
        if (response.success) {
          this.patients = response.data;
        } else {
          this.hasError = true;
          this.errMessage = response.message;
        }
      }, error => {
        this.hasError = true;
        this.errMessage = error;
      });
  }

}
