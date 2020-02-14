import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {AuthGuard} from './core/auth.guard';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('src/app/views/pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('src/app/views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      // {
      //   path: 'user',
      //   loadChildren: () => import('src/app/views/pages/user/user.module').then(m => m.UserModule)
      // },
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
