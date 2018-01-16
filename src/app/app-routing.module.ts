import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {DashboardModule} from './dashboard/dashboard.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {path: 'index', component: AppComponent},
  {path: 'dashboard', component: DashboardComponent},

  // { path: '', redirectTo: '/index', pathMatch: 'full' },
];


// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

// export class AppRoutingModule {
// }
