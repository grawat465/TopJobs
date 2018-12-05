import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewJobComponent } from './new-job/new-job.component';
import { PostedJobsComponent } from './posted-jobs/posted-jobs.component';
import { EmployeerComponent } from './employeer.component';

const routes: Routes = [
 {
    path: 'employer', component : EmployeerComponent, children: [

      {
         path : 'newjob/:empId', component : NewJobComponent
      },
      {
          path : 'jobs/:empId', component: PostedJobsComponent
      },
      {
        path:'**',component:PostedJobsComponent
      },
]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule {}
