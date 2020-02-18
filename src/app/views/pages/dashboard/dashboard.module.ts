import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule} from '@angular/router';
import {NgxChartsModule} from '@swimlane/ngx-charts';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      }]),
    ]
})
export class DashboardModule { }
