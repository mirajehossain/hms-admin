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
            path: '/:doctorId',
            component: DoctorComponent,
          },
          {
            path: '/:doctorId',
            component: UpdateComponent,
          },
          {path: '', redirectTo: 'list', pathMatch: 'full'},
          {path: '**', redirectTo: 'list', pathMatch: 'full'}
        ],
      },
    ]),
    ThemeModule,
    ReactiveFormsModule,
  ]
})
export class DoctorsModule { }
