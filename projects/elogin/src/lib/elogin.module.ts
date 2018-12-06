import { NgModule} from '@angular/core';
import { EloginComponent } from './elogin.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { EloginRoutingModule } from './elogin-routing.module';
import { CommonModule } from '@angular/common';
import { EmployeerModule, EmployeerComponent } from 'projects/employeer/src/public_api';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatTabsModule, MatSnackBarModule, MatCardModule, MatError, MatFormField, MatOption, MatHint, MatSelect, MatInputModule, MatSelectModule, MatFormFieldModule, MatIconModule, MatHeaderRowDef, MatButtonModule, MatCheckboxModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatTableModule, MatListModule } from '@angular/material';
import { SubscriptionFeeComponent } from './subscription-fee/subscription-fee.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SubscriptionFeeDetails } from './services/subscription-fee-details';
import { LoginSignupService } from './services/login-signup.service';
import { HomeComponent } from 'src/app/home/home.component';
import { BlogsComponent } from 'src/app/blogs/blogs.component';
import { ContactusComponent } from 'src/app/contactus/contactus.component';
import { AboutusComponent } from 'src/app/aboutus/aboutus.component';
import { NewJobComponent } from 'projects/employeer/src/lib/new-job/new-job.component';
import { PostedJobsComponent } from 'projects/employeer/src/lib/posted-jobs/posted-jobs.component';
import { ShortlistedCandidatesComponent } from 'projects/employeer/src/lib/shortlisted-candidates/shortlisted-candidates.component';
import { SeekerComponent } from 'projects/seeker/src/public_api';
import { ResumeComponent } from 'projects/seeker/src/lib/resume/resume.component';
import { JobsComponent } from 'projects/seeker/src/lib/jobs/jobs.component';
import { SloginComponent } from 'projects/slogin/src/public_api';
import { SignupComponentSeeker } from 'projects/slogin/src/lib/signup/signup.component';
import { LoginComponentSeeker } from 'projects/slogin/src/lib/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CandidateListComponent } from 'projects/employeer/src/lib/candidate-list/candidate-list.component';


@NgModule({
  declarations: [EloginComponent, SignupComponent, LoginComponent, SubscriptionFeeComponent,HomeComponent , BlogsComponent,
    AboutusComponent,
    ContactusComponent,EmployeerComponent,NewJobComponent,PostedJobsComponent,
  ShortlistedCandidatesComponent,SeekerComponent,ResumeComponent,JobsComponent,SloginComponent,SignupComponentSeeker,LoginComponentSeeker,CandidateListComponent

  ],
  imports: [
    EloginRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
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
  MatTableModule,
  MatListModule,
  EmployeerModule
  ],
  providers:[SubscriptionFeeDetails,LoginSignupService,LoginComponent,SignupComponent,SubscriptionFeeComponent],
  exports: [EloginComponent,SignupComponent,LoginComponent],

})
export class EloginModule { }
