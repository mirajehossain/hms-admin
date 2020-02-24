import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BloodBankComponent} from './blood-bank.component';
import {RouterModule} from '@angular/router';
import {PatientsComponent} from '../patients/patients.component';
import {ListComponent} from '../patients/list/list.component';
import {AddComponent} from '../patients/add/add.component';
import {PatientComponent} from '../patients/patient/patient.component';
import {ReportsComponent} from '../patients/reports/reports.component';
import {UpdateComponent} from '../patients/update/update.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ThemeModule} from '../../theme/theme.module';
import { DonorsComponent } from './donors/donors.component';
import { AddDonorComponent } from './add-donor/add-donor.component';



@NgModule({
  declarations: [BloodBankComponent, DonorsComponent, AddDonorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BloodBankComponent,
        children: [
          {
            path: 'donors',
            component: DonorsComponent,
          },
          {
            path: 'add-donor',
            component: AddDonorComponent,
          },
          {path: '', redirectTo: 'donors', pathMatch: 'full'},
          {path: '**', redirectTo: 'donors', pathMatch: 'full'}
        ],
      },
    ]),
    ReactiveFormsModule,
    ThemeModule,

  ]
})
export class BloodBankModule { }
