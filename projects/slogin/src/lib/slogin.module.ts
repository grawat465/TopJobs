import { NgModule } from '@angular/core';
import { SloginComponent } from './slogin.component';
import { LoginComponentSeeker } from './login/login.component';
import { SignupComponentSeeker } from './signup/signup.component';
import { CommonModule } from '@angular/common'; 
import { SloginRoutingModule } from './slogin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule,
  MatCardModule, MatIconModule, MatInputModule,
  MatDatepickerModule, MatNativeDateModule,
  MatSelectModule, MatSnackBarModule, MatRadioModule, MatTabsModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { EloginComponent, EloginService, EloginModule } from 'projects/elogin/src/public_api';
import { SubscriptionFeeComponent } from 'projects/elogin/src/lib/subscription-fee/subscription-fee.component';
import { HomeComponent } from 'src/app/home/home.component';
import { BlogsComponent } from 'src/app/blogs/blogs.component';
import { AboutusComponent } from 'src/app/aboutus/aboutus.component';
import { ContactusComponent } from 'src/app/contactus/contactus.component';
import { EmployeerComponent, EmployeerModule } from 'projects/employeer/src/public_api';
import { NewJobComponent } from 'projects/employeer/src/lib/new-job/new-job.component';
import { PostedJobsComponent } from 'projects/employeer/src/lib/posted-jobs/posted-jobs.component';
import { ShortlistedCandidatesComponent } from 'projects/employeer/src/lib/shortlisted-candidates/shortlisted-candidates.component';
import { SeekerComponent } from 'projects/seeker/src/public_api';
import { ResumeComponent } from 'projects/seeker/src/lib/resume/resume.component';
import { JobsComponent } from 'projects/seeker/src/lib/jobs/jobs.component';
import { CandidateListComponent } from 'projects/employeer/src/lib/candidate-list/candidate-list.component';
//import { SignupComponent } from 'projects/elogin/src/lib/signup/signup.component';
import { LoginComponent } from 'projects/elogin/src/lib/login/login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
//import { SeekerModule } from 'projects/seeker/src/public_api';

@NgModule({
  declarations: [SloginComponent,SignupComponentSeeker,LoginComponentSeeker, SubscriptionFeeComponent,HomeComponent, BlogsComponent,
    AboutusComponent,
    ContactusComponent,EmployeerComponent,NewJobComponent,PostedJobsComponent,
  ShortlistedCandidatesComponent,SeekerComponent,ResumeComponent,JobsComponent,CandidateListComponent,EloginComponent, LoginComponent],
  imports: [
    CommonModule,
    SloginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientTestingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatRadioModule,
    MatTabsModule,
    HttpClientModule,
    EloginModule,
    RouterTestingModule
    

  ],
  providers:[LoginComponentSeeker,SignupComponentSeeker,EloginService],
  exports: [SloginComponent]
})
export class SloginModule { }
