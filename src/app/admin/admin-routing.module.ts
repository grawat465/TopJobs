import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ViewAllJobsComponent } from './view-all-jobs/view-all-jobs.component';
import { ViewAllEmployersComponent } from './view-all-employers/view-all-employers.component';
import { DashlayoutComponent } from './dashlayout/dashlayout.component';

const routes: Routes = [
  {
    path:'alogin', component:AdminloginComponent  
  },
  // {
  //   path:'admindash', component:AdmindashboardComponent 
  // },
  { path: 'main', component:DashlayoutComponent,children :[
  {
    path:'alljobs', component:ViewAllJobsComponent 
  },
  {
    path:'allemployers', component:ViewAllEmployersComponent 
  },
  {
    path:'', redirectTo: 'alljobs', pathMatch:'full'
  }
]
} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
