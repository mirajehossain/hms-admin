import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DoctorService} from '../../../../core/services/doctor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public doctorForm: FormGroup;
  public hasError = false;
  public errMessage = '';

  constructor(
    private fb: FormBuilder,
    private doctorApiService: DoctorService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.initDoctorForm();
  }

  public createDoctor(data) {
    this.doctorApiService.CreateDoctor(data)
      .subscribe(response => {
        if (response.success) {
          this.router.navigate(['/doctors/list']);
          this.doctorForm.reset();
        } else {
          this.hasError = true;
          this.errMessage = response.message;
        }
      }, error => {
        this.hasError = true;
        this.errMessage = error;
      });
  }

  public initDoctorForm() {
    this.doctorForm = this.fb.group({
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

      designation: ['', Validators.compose([
      ])],
      isDonor: ['', Validators.compose([
      ])]

    });
  }
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.doctorForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

}
