import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginModel} from '../auth.model';
import {AuthService} from '../../../../core/services/auth.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public hasError = false;
  public errMessage = '';

  public user: LoginModel = new LoginModel();
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    public spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.initLoginForm();
  }

  public login() {
    this.spinner.show();
    const controls = this.loginForm.controls;
    const authData = {
      email: controls.email.value,
      password: controls.password.value
    };
    console.log(authData);
    this.authService.Login(authData)
      .subscribe(response => {
        this.spinner.hide();
        console.log(response);
        if (!response.success) {
          this.hasError = true;
          this.errMessage = response.message;
        } else {
          localStorage.setItem('user', JSON.stringify(response.data));
          this.router.navigate(['/dashboard']);
        }
      }, error => {
        this.spinner.hide();
        console.log(error);
        this.hasError = true;
        this.errMessage = error.message;
      });
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(320) // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
      ])
      ],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])],
    });
  }


  /**
   * Checking control validation
   *
   * @param controlName: string => Equals to formControlName
   * @param validationType: string => Equals to valitors name
   */
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.loginForm.controls[controlName];
    if (!control) {
      return false;
    }

    return control.hasError(validationType) && (control.dirty || control.touched);
  }
}
