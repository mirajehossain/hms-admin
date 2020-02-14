import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthComponent } from './auth.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
        children: [
          {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
          },
          {
            path: 'login',
            component: LoginComponent,
          },
          {
            path: 'forgot-password',
            component: ForgotPasswordComponent,
          }
        ]
      },
    ]),

  ]
})
export class AuthModule { }
