import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EloginComponent } from 'projects/elogin/src/public_api';
import { EmployeerComponent } from 'projects/employeer/src/public_api';
import { LoginComponent } from 'projects/elogin/src/lib/login/login.component';
import { SignupComponent } from 'projects/elogin/src/lib/signup/signup.component';
import { NewJobComponent } from 'projects/employeer/src/lib/new-job/new-job.component';
import { PostedJobsComponent } from 'projects/employeer/src/lib/posted-jobs/posted-jobs.component';
import { ShortlistedCandidatesComponent } from 'projects/employeer/src/lib/shortlisted-candidates/shortlisted-candidates.component';
import { SeekerComponent } from 'projects/seeker/src/public_api';
import { ResumeComponent } from 'projects/seeker/src/lib/resume/resume.component';
import { JobsComponent } from 'projects/seeker/src/lib/jobs/jobs.component';
import { SloginComponent } from 'projects/slogin/src/public_api';
import { LoginComponentSeeker } from 'projects/slogin/src/lib/login/login.component';
import { SignupComponentSeeker } from 'projects/slogin/src/lib/signup/signup.component';
import { AdminModule } from './admin/admin.module';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { ViewAllJobsComponent } from './admin/view-all-jobs/view-all-jobs.component';
import { ViewAllEmployersComponent } from './admin/view-all-employers/view-all-employers.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [

  {
    path: '', component : HomeComponent
  },

  {
    path: 'home', component : HomeComponent
  },
  {
    path : 'blog', component : BlogsComponent
  },
  {
    path : 'about', component : AboutusComponent
  },

  {
    path : 'contact', component: ContactusComponent
  },
  {
    path:'elogin',component:EloginComponent,children:[
      {path:'login',component:SignupComponent},
      {path:'signup',component:LoginComponent},
      {path:'**',component:SignupComponent}
    ]
  },
  {
    path:'employer',component:EmployeerComponent,children:[
      {path:'newjob/:empId',component:NewJobComponent},
      {path:'jobs/:empId',component:PostedJobsComponent},
      {path:'shortlist/:empId',component:ShortlistedCandidatesComponent},
      {path:'**',component:PostedJobsComponent}
    ]
  },
  {
    path:'seeker',component:SeekerComponent,children:[
      {path:'resume/:seekid',component:ResumeComponent},
      {path:'jobs/:seekid',component:JobsComponent},
      {path:'**',component:JobsComponent}
    ]
  },
  {
    path:'slogin',component:SloginComponent,children:[
      {path:'login',component:LoginComponentSeeker},
      {path:'signup',component:SignupComponentSeeker},
      {path:'**',component:LoginComponentSeeker}
    ],
  },
{
  path:'admin',component:AdminComponent,children:[
    // {path:'admindash',component:AdmindashboardComponent,children:[
    //   {path:'alljobs',component:ViewAllJobsComponent},
    //   {path:'allemployers',component:ViewAllEmployersComponent},
    // ]},
    {path:'alogin',component:AdminloginComponent},
    {path:'**',component:AdminloginComponent}
  ]
}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
