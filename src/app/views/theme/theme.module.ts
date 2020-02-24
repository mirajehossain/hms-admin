import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import {RouterModule} from '@angular/router';
import {BaseComponent} from './base/base.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DoctorSubheaderComponent } from './doctor-subheader/doctor-subheader.component';
import { PatientSubheaderComponent } from './patient-subheader/patient-subheader.component';
import { BloodBankSubheaderComponent } from './blood-bank-subheader/blood-bank-subheader.component';



@NgModule({
  declarations: [BaseComponent, HeaderComponent, FooterComponent, AsideComponent, DoctorSubheaderComponent, PatientSubheaderComponent, BloodBankSubheaderComponent],
  exports: [
    DoctorSubheaderComponent,
    PatientSubheaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class ThemeModule { }
