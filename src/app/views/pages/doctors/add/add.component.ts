import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public doctorForm: FormGroup;

  constructor(
    private fb: FormBuilder,

  ) { }

  ngOnInit() {
    this.initDoctorForm();
  }

  public createDoctor(data) {
    console.log(data);
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
