
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponentSeeker } from './login.component';
import { Seeker } from '../models/seeker';
import { SloginService } from '../slogin.service';
import { DebugElement } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SloginComponent } from '../slogin.component';
import { SignupComponentSeeker } from '../signup/signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSnackBarModule, MatRadioModule, MatTabsModule, MatTableModule, MatListModule, MatStepperModule, MatPaginatorModule, MatChipsModule, MatAutocompleteModule } from '@angular/material';
import { HomeComponent } from 'src/app/home/home.component';
import { BlogsComponent } from 'src/app/blogs/blogs.component';
import { AboutusComponent } from 'src/app/aboutus/aboutus.component';
import { ContactusComponent } from 'src/app/contactus/contactus.component';
import { EloginComponent } from 'projects/elogin/src/public_api';
import { SignupComponent } from 'projects/elogin/src/lib/signup/signup.component';
import { LoginComponent } from 'projects/elogin/src/lib/login/login.component';
import { EmployeerComponent } from 'projects/employeer/src/public_api';
import { NewJobComponent } from 'projects/employeer/src/lib/new-job/new-job.component';
import { PostedJobsComponent } from 'projects/employeer/src/lib/posted-jobs/posted-jobs.component';
import { ShortlistedCandidatesComponent } from 'projects/employeer/src/lib/shortlisted-candidates/shortlisted-candidates.component';
import { SeekerComponent } from 'projects/seeker/src/public_api';
import { ResumeComponent } from 'projects/seeker/src/lib/resume/resume.component';
import { JobsComponent } from 'projects/seeker/src/lib/jobs/jobs.component';
import { CandidateListComponent } from 'projects/employeer/src/lib/candidate-list/candidate-list.component';
import { ContentComponent } from 'projects/seeker/src/lib/layout/content/content.component';

const dummyPosts: Seeker[]=[{
  firstName:"Bhanu",
  lastName:"Khandelwal",
  gender:"male",
  country:"India",
  emailId:"bhanu@9k@gmail.com",
  password:"Bhanu@123",
  dob:new Date('1995-10-29'),
  address:"Main Market",
  mobileno:"1234567890",
  bio:"hello",
  city:"noida",
  zipcode:"123456",
  states:"up",
  username:"bhanu29k"
}]; 

class MockUser {
  public requestLogin(): Seeker[] {
    return dummyPosts;
  }
}
describe('LoginComponentSeeker', () => {
  let component: LoginComponentSeeker;
  let fixture: ComponentFixture<LoginComponentSeeker>;
  let service: SloginService;
  let spy;
  let debugElement:DebugElement;
  const routes: Routes = [
    {
        path : 'slogin', component : SloginComponent, children : [
        {
          path: '', component : LoginComponentSeeker
        },
        {
          path: 'login', component : LoginComponentSeeker
        },
        {
          path : 'signup', component : SignupComponentSeeker
        }
    ]
    }
         ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponentSeeker,HomeComponent,BlogsComponent,
        AboutusComponent,
        ContactusComponent,EloginComponent,SignupComponent,
        LoginComponent,EmployeerComponent,
        NewJobComponent,
        PostedJobsComponent,
        ShortlistedCandidatesComponent,
        SeekerComponent,
        ResumeComponent,
        JobsComponent,
        SloginComponent,
        SignupComponentSeeker,
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
       RouterModule.forRoot(routes),
      ],
      providers:[LoginComponentSeeker]
     
    })
    .compileComponents();
    component=TestBed.get(LoginComponentSeeker);
    service=TestBed.get(SloginService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponentSeeker);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000000;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form validation',()=>{
    expect(component.loginForm.valid).toBeFalsy();
  });
  it('email validation',()=>{
    let errors = {};
    let email = component.loginForm.controls['email']; 
    expect(email.valid).toBeFalsy(); 
    
    errors = email.errors || {};
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
    obj.controls['email'].setValue("bhanu29k");
    obj.controls['password'].setValue("Bhanu@123");
    component.onSubmit(obj);
    const dummyPosts: Seeker[]=[{
      firstName:"Bhanu",
      lastName:"Khandelwal",
      gender:"male",
      country:"India",
      emailId:"bhanu@9k@gmail.com",
      password:"Bhanu@123",
      dob:new Date('1995-10-29'),
      address:"Main Market",
      mobileno:"1234567890",
      bio:"hello",
      city:"noida",
      zipcode:"123456",
      states:"up",
      username:"bhanu29k"
    }]; 
  //  spy=spyOn(service,'requestLogin').and.returnValue(dummyPosts);
  //expect(spy.onSubmit(obj)).toBeTruthy();
  });

  it('Login function testing',()=>{
    component.login();
  });
});

/*
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponentSeeker } from './login.component';

import { SignupComponentSeeker } from '../signup/signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppRoutingModule } from '../../../../../src/app/app-routing.module';

import { DebugElement, ContentChildren } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';
import { MatTabsModule, MatSnackBarModule, MatCardModule, MatError, MatFormField, MatOption, MatHint, MatSelect, MatInputModule, MatFormFieldModule, MatIconModule, MatHeaderRowDef, MatButtonModule, MatCheckboxModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatRadioModule, MatTableModule, MatListModule, MatStepperModule, MatPaginatorModule, MatChipsModule, MatAutocompleteModule } from '@angular/material';
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
//import { SignupComponent } from 'projects/Elogin/src/lib/signup/signup.component';
import { LoginComponent } from 'projects/Elogin/src/lib/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CandidateListComponent } from 'projects/employeer/src/lib/candidate-list/candidate-list.component';
import { ContentComponent } from 'projects/seeker/src/lib/layout/content/content.component';
import { RouterModule, Routes } from '@angular/router';
import { SloginService } from '../slogin.service';
import { Seeker } from '../models/seeker';
import { SubscriptionFeeComponent } from 'projects/elogin/src/lib/subscription-fee/subscription-fee.component';
import { EloginComponent, EloginModule } from 'projects/elogin/src/public_api';
import { RouterTestingModule } from '@angular/router/testing';


const dummyPosts: Seeker[]=[{
  firstName:"Bhanu",
  lastName:"Khandelwal",
  gender:"male",
  country:"India",
  emailId:"bhanu@9k@gmail.com",
  password:"Bhanu@123",
  dob:new Date('1995-10-29'),
  address:"Main Market",
  mobileno:"1234567890",
  bio:"hello",
  city:"noida",
  zipcode:"123456",
  states:"up",
  username:"bhanu29k"
}]; 

class MockUser {
  public requestLogin(): boolean {
    return true;
  }
}

describe('LoginComponentSeeker', () => {
  let component: LoginComponentSeeker;
  let fixture: ComponentFixture<LoginComponentSeeker>;
  let service: SloginService;
  let spy;
  let debugElement:DebugElement;
  const routes: Routes = [
    {
        path : 'slogin', component : SloginComponent, children : [
        {
          path: '', component : LoginComponentSeeker
        },
        {
          path: 'login', component : LoginComponentSeeker
        },
        {
          path : 'signup', component : SignupComponentSeeker
        }
    ]
    }
         ];
    
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LoginComponentSeeker,
        SignupComponentSeeker,
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
        LoginComponent,
        
        CandidateListComponent,
        ContentComponent
       // MatError,
     //   MatFormField,
    //    MatOption,
       // MatHint,
        //MatSelect,
        //MatHeaderRowDef
        
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
       RouterModule.forRoot(routes),
      
      
       

        
    //  Observable
      ],
        providers: [{provide:SloginService,useClass:MockUser},LoginComponentSeeker],
      
    })
    .compileComponents();
    component=TestBed.get(LoginComponentSeeker);
    service=TestBed.get(SloginService);
   
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponentSeeker);
    component = fixture.componentInstance;
    fixture.detectChanges();
   // jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
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
  it('email validation',()=>{
    let errors = {};
    let email = component.loginForm.controls['email']; 
    expect(email.valid).toBeFalsy(); 
    
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('password validation',()=>{
    let errors = {};
    let password = component.loginForm.controls['password']; 
    expect(password.valid).toBeFalsy(); 
    
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });
  /*
  it('Onsubmit function testing',()=>{
    let obj=component.loginForm;
    obj.controls['empId'].setValue("bhanu29k");
    obj.controls['password'].setValue("Bhanu@123");
    component.onSubmit(obj);
    const dummyPosts: Seeker[]=[{
      firstName:"Bhanu",
      lastName:"Khandelwal",
      gender:"male",
      country:"India",
      emailId:"bhanu@9k@gmail.com",
      password:"Bhanu@123",
      dob:new Date('1995-10-29'),
      address:"Main Market",
      mobileno:"1234567890",
      bio:"hello",
      city:"noida",
      zipcode:"123456",
      states:"up",
      username:"bhanu29k"
    }]; 
  //  spy=spyOn(service,'requestLogin').and.returnValue(dummyPosts);
  //expect(spy.onSubmit(obj)).toBeTruthy();
      
  });
*/

//});




/*
describe('SignupComponent', () => {
  
    
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
*/