import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ViewAllJobsComponent } from './view-all-jobs/view-all-jobs.component';
import { ViewAllEmployersComponent } from './view-all-employers/view-all-employers.component';

const routes: Routes = [
  {
    path:'alogin', component:AdminloginComponent  
  },
  {
    path:'admindash', component:AdmindashboardComponent 
  },
  {
    path:'alljobs', component:ViewAllJobsComponent 
  },
  {
    path:'allemployers', component:ViewAllEmployersComponent 
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
