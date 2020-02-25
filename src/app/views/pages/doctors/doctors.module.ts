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
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NgxSpinnerModule} from 'ngx-spinner';


@NgModule({
  declarations: [DoctorsComponent, ListsComponent, UpdateComponent, DoctorComponent, ReportsComponent, AddComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
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
            component: ReportsComponent,
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
    NgxSpinnerModule,
  ],
  providers: [

  ]
})
export class DoctorsModule { }
