import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Constants } from './constants/constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: Constants.DASHBOARD,
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./master/master.module').then(m => m.MasterModule)
  },
  {
    path: Constants.DASHBOARD,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
