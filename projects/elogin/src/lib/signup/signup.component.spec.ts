/*
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
*/


import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppRoutingModule } from '../../../../../src/app/app-routing.module';
import { LoginSignupService } from '../services/login-signup.service';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../../../../../src/app/app.component';
import { SubscriptionFeeComponent } from '../subscription-fee/subscription-fee.component';
import { SubscriptionFeeDetails } from '../services/subscription-fee-details';
import { LoginSignup } from '../services/login-signup';
import { DebugElement, ContentChildren } from '@angular/core';
import { EloginComponent } from '../elogin.component';
import { HomeComponent } from 'src/app/home/home.component';
import { MatTabsModule, MatSnackBarModule, MatCardModule, MatError, MatFormField, MatOption, MatHint, MatSelect, MatInputModule, MatFormFieldModule, MatIconModule, MatHeaderRowDef, MatButtonModule, MatCheckboxModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatRadioModule, MatTableModule, MatListModule, MatStepperModule, MatPaginatorModule, MatChipsModule, MatAutocompleteModule } from '@angular/material';
import { EloginRoutingModule } from '../elogin-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
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
import { SloginComponent } from 'projects/slogin/src/public_api';
import { SignupComponentSeeker } from 'projects/slogin/src/lib/signup/signup.component';
import { LoginComponentSeeker } from 'projects/slogin/src/lib/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CandidateListComponent } from 'projects/employeer/src/lib/candidate-list/candidate-list.component';
import { ContentComponent } from 'projects/seeker/src/lib/layout/content/content.component';
import { RouterModule, Routes } from '@angular/router';


const dummyPosts: LoginSignup[]=[{
  firstName:"Bhanu",
  lastName:"Khandelwal",
  gender:"male",
  country:"India",
  emailId:"bhanu@9k@gmail.com",
  password:"Bhanu@123",
  empId:"bhanu29k"
}]; 

class MockUser {
  public requestLogin(): LoginSignup[] {
    return dummyPosts;
  }
}

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let service: LoginSignupService;
  let spy;
  let debugElement:DebugElement;
  const routes: Routes = [
    { path : 'elogin', component: EloginComponent, children : [ 
        {
          path: '', component : SignupComponent
        },
        {
          path: 'login', component : SignupComponent
        },
        {
          path : 'signup', component : LoginComponent
          
        }
    ]
    }
         ];
    
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LoginComponent,
        SignupComponent,
        SubscriptionFeeComponent,
        EloginComponent,
        HomeComponent,
        BlogsComponent,
        AboutusComponent,
        ContactusComponent,
        EmployeerComponent,
        NewJobComponent,
        PostedJobsComponent,
        ShortlistedCandidatesComponent,
        SeekerComponent,
        ResumeComponent,
        JobsComponent,
        SloginComponent,
        SignupComponentSeeker,
        LoginComponentSeeker,
        CandidateListComponent,
        ContentComponent
        
          ],
      imports:[ BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
    
      
       // MatError,
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
       MatStepperModule,
       MatPaginatorModule,
       MatChipsModule,
       MatAutocompleteModule,
       RouterModule.forRoot(routes)
      
       

        
    //  Observable
      ],
        providers: [{provide:LoginSignupService,useClass:MockUser},SignupComponent],
      
    })
    .compileComponents();
    component=TestBed.get(SignupComponent);
    service=TestBed.get(LoginSignupService);
   
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
 //  debugElement=fixture.debugElement;
  //  service=debugElement.injector.get(LoginSignupService);
    //spy=spyOn(service,'requestLogin').and.callFake(()=>{
     // return Observable.from([dummyPosts]);
      
   // }); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form validation',()=>{
    expect(component.loginForm.valid).toBeFalsy();
  });
  it('empId validation',()=>{
    let errors = {};
    let empId = component.loginForm.controls['empId']; 
    expect(empId.valid).toBeFalsy(); 
    
    errors = empId.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('password validation',()=>{
    let errors = {};
    let password = component.loginForm.controls['password']; 
    expect(password.valid).toBeFalsy(); 
    
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });
  
  it('Onsubmit function testing',()=>{
    let obj=component.loginForm;
    obj.controls['empId'].setValue("bhanu29k");
    obj.controls['password'].setValue("Bhanu@123");
    component.onSubmit(obj);
    const dummyPosts: LoginSignup[]=[{
      firstName:"Bhanu",
      lastName:"Khandelwal",
      gender:"male",
      country:"India",  
      emailId:"bhanu@9k@gmail.com",
      password:"Bhanu@123",
      empId:"bhanu29k"
    }]; 
  //  spy=spyOn(service,'requestLogin').and.returnValue(dummyPosts);
  //expect(spy.onSubmit(obj)).toBeTruthy();
      
  });

  it('SignupComp function test',()=>{
    component.signUpComp();
  });
});
