import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {AuthGuard} from './core/auth.guard';
import {BaseComponent} from './views/theme/base/base.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('src/app/views/pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('src/app/views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'doctors',
        loadChildren: () => import('src/app/views/pages/doctors/doctors.module').then(m => m.DoctorsModule)
      },
      {
        path: 'patients',
        loadChildren: () => import('src/app/views/pages/patients/patients.module').then(m => m.PatientsModule)
      },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
