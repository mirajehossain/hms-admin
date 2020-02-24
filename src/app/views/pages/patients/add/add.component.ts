import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PatientService} from '../../../../core/services/patient.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public patientForm: FormGroup;
  public hasError = false;
  public errMessage = '';

  constructor(
    private fb: FormBuilder,
    private patientApiService: PatientService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.initPatientForm();
  }

  public createPatient(data) {
    this.patientApiService.CreatePatient(data)
      .subscribe(response => {
        if (response.success) {
          this.router.navigate(['/patients/list']);
          this.patientForm.reset();
        } else {
          this.hasError = true;
          this.errMessage = response.message;
        }
      }, error => {
        this.hasError = true;
        this.errMessage = error;
      });
  }

  public initPatientForm() {
    this.patientForm = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(320) // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
      ])
      ],
      mobile: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])],
      address: ['', Validators.compose([
      ])],
      bloodGroup: ['', Validators.compose([
      ])],
      gender: ['', Validators.compose([
      ])],

      designation: ['', Validators.compose([
      ])],
      isDonor: ['', Validators.compose([
      ])]

    });
  }
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.patientForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }


}
