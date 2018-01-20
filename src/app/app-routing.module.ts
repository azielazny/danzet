import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {
  UpcomingCarInspectionsComponent
} from './dashboard/dashboard/upcoming-car-inspections/upcoming-car-inspections/upcoming-car-inspections.component';
import {DashboardLayoutComponent} from './dashboard/dashboard-layout/dashboard-layout.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {
    path: '',
    component: DashboardLayoutComponent
    // children: [
    //   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    //   { path: '/dashboard', component: DashboardComponent },
    //   { path: 'applications', component: UpcomingCarInspectionsComponent }
    // ]
  },
  { path: 'index', component: UpcomingCarInspectionsComponent},
  // { path: '**', redirectTo: '' }
  // {path: 'index', component: UpcomingCarInspectionsComponent,   data: { title: 'blank Views' }},
  // {path: 'dashboard', component: DashboardComponent,  data: { title: 'blank Views' }, children: DashboardRoutingModule},
  // {path: 'dashboard', component: UpcomingCarInspectionsComponent},



  // {path: 'dashboard', component: UpcomingCarInspectionsComponent, outlet: 'side-column'}


// { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}


