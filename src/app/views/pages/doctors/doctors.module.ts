import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './doctors.component';
import {RouterModule} from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { UpdateComponent } from './update/update.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ReportsComponent } from './reports/reports.component';
import { AddComponent } from './add/add.component';
import {ThemeModule} from '../../theme/theme.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptorService} from '../../../core/services/token-interceptor.service';
import {DoctorService} from '../../../core/services/doctor.service';



@NgModule({
  declarations: [DoctorsComponent, ListsComponent, UpdateComponent, DoctorComponent, ReportsComponent, AddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DoctorsComponent,
        children: [
          {
            path: 'list',
            component: ListsComponent,
          },
          {
            path: 'add',
            component: AddComponent,
          },
          {
            path: 'details/:doctorId',
            component: DoctorComponent,
          },
          {
            path: 'update/:doctorId',
            component: UpdateComponent,
          },
          {path: '', redirectTo: 'list', pathMatch: 'full'},
          {path: '**', redirectTo: 'list', pathMatch: 'full'}
        ],
      },
    ]),
    ThemeModule,
    ReactiveFormsModule,
  ],
  providers: [

  ]
})
export class DoctorsModule { }
