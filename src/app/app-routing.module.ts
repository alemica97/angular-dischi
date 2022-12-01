import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './componenti/grid/grid.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiscoInfoComponent } from './disco-info/disco-info.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'dischi-list',
    component: GridComponent
  },
  {
    path: 'disco-info/:title',
    component: DiscoInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
