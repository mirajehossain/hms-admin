import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConsultPatientComponent } from './consult-patient/consult-patient.component';

@NgModule({
  declarations: [ProfileComponent, ConsultPatientComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule { }
