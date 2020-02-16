import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { PatientComponent } from './patient/patient.component';
import { ReportsComponent } from './reports/reports.component';
import {RouterModule} from '@angular/router';
import {AddComponent} from './add/add.component';


@NgModule({
  declarations: [PatientsComponent, ListComponent, UpdateComponent, PatientComponent, ReportsComponent, AddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'add',
        component: AddComponent,
      },
      {
        path: '/:patientId',
        component: PatientComponent,
      },
      {
        path: '/:patientId',
        component: UpdateComponent,
      },
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: '**', redirectTo: 'list', pathMatch: 'full'}
    ]),
  ]
})
export class PatientsModule { }
