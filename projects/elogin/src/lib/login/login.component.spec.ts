import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../../../../src/app/app-routing.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
//import { SubscriptionFeeDetails } from '../subscription-fee-details';
import { SubscriptionFeeDetails } from '../services/subscription-fee-details';
import { AppComponent } from '../../../../../src/app/app.component';
import { SignupComponent } from '../signup/signup.component';
import { SubscriptionFeeComponent } from '../subscription-fee/subscription-fee.component';
import { LoginSignupService } from '../services/login-signup.service';
import { LoginSignup } from '../services/login-signup';
import { Router, RouterModule, Routes } from '@angular/router';
import { EloginComponent } from '../elogin.component';
import { HomeComponent } from 'src/app/home/home.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BlogsComponent } from 'src/app/blogs/blogs.component';
import { AboutusComponent } from 'src/app/aboutus/aboutus.component';
import { ContactusComponent } from 'src/app/contactus/contactus.component';
import { EmployeerComponent } from 'projects/employeer/src/public_api';
import { NewJobComponent } from 'projects/employeer/src/lib/new-job/new-job.component';
import { PostedJobsComponent } from 'projects/employeer/src/lib/posted-jobs/posted-jobs.component';
import { ShortlistedCandidatesComponent } from 'projects/employeer/src/lib/shortlisted-candidates/shortlisted-candidates.component';
import { SeekerComponent } from 'projects/seeker/src/public_api';
import { ResumeComponent } from 'projects/seeker/src/lib/resume/resume.component';
import { JobsComponent } from 'projects/seeker/src/lib/jobs/jobs.component';
import { SloginComponent } from 'projects/slogin/src/public_api';
import { SignupComponentSeeker } from 'projects/slogin/src/lib/signup/signup.component';
import { LoginComponentSeeker } from 'projects/slogin/src/lib/login/login.component';
import { CandidateListComponent } from 'projects/employeer/src/lib/candidate-list/candidate-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSnackBarModule, MatRadioModule, MatTabsModule, MatTableModule, MatListModule, MatStepperModule, MatPaginatorModule, MatChipsModule, MatAutocompleteModule } from '@angular/material';
import { ContentComponent as ContentComponent1 } from 'src/app/layout/content/content.component';
import { ContentComponent as ContentComponent2} from 'projects/seeker/src/lib/layout/content/content.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { of } from 'rxjs';


 

//import {Observable,of} from 'rxjs';

const dummyPosts: LoginSignup[]=[{
  firstName:"Bhanu",
  lastName:"Khandelwal",
  gender:"male",
  country:"India",
  emailId:"bhanu29k@gmail.com",
  password:"Bhanu@123",
  empId:"bhanu29k"
}]; 

class MockUser {
  public addUser(): LoginSignup[] {
    return dummyPosts;
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginSignupService;
  let spy:any;
  let httpMock:HttpTestingController;
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
     // imports:[ReactiveFormsModule,FormsModule,RouterTestingModule],
      declarations: [   AppComponent,
        LoginComponent,
        SignupComponent,
        SubscriptionFeeComponent,EloginComponent ,
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
        ContentComponent1,
        ContentComponent2,
        HeaderComponent,
        FooterComponent
       
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
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
      providers: [SubscriptionFeeDetails,{provide:LoginSignupService,useClass:MockUser},LoginComponent,SignupComponent, {
        provide: Router,
        useClass: class { 
            navigate = jasmine.createSpy("navigate"); 
        }
    }]
    })
    .compileComponents();
   component=TestBed.get(LoginComponent);
    service=TestBed.get(LoginSignupService);
   // httpMock=TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
  fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    //service=new LoginSignupService(httpMock);
   //component=new component(new FormBuilder(),new Router(),service);
  });

  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it(' First Name field validity', () => {
    let errors = {};
    let firstName = component.registerForm.controls['firstName']; 
    expect(firstName.valid).toBeFalsy(); 
    
    errors = firstName.errors || {};
    expect(errors['required']).toBeTruthy(); 

    firstName.setValue("bhanu");
    errors = firstName.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeTruthy();   

    firstName.setValue("Bhanu");
    errors = firstName.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeFalsy();  
  });


  it(' Last Name field validity', () => {
    let errors = {};
    let lastName = component.registerForm.controls['lastName']; 
    expect(lastName.valid).toBeFalsy(); 

    errors = lastName.errors || {};
    expect(errors['required']).toBeTruthy(); 

    lastName.setValue("bhanu");
    errors = lastName.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeTruthy();   

    lastName.setValue("Bhanu");
    errors = lastName.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeFalsy();
  });

  it('Email field validity', () => {
    let emailId = component.registerForm.controls['emailId']; 
    expect(emailId.valid).toBeFalsy(); 
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.registerForm.controls['emailId'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('email field pattern validity', () => {
    let errors = {};
    let email = component.registerForm.controls['emailId'];
    email.setValue("test@gmail.com");
    errors = email.errors || {};
    expect(errors['email']).toBeFalsy();
  });


  it('Password field validity', () => {
    let password = component.registerForm.controls['password']; 
    expect(password.valid).toBeFalsy(); 
  });
  
  it('Confirm Password field validity', () => {
    let confirmPassword = component.registerForm.controls['confirmPassword']; 
    expect(confirmPassword.valid).toBeFalsy(); 
  });

  
  it('OnSubmit function test',() =>{
   let obj=component.registerForm;
   obj.controls['password'].setValue("Bhanu@123");
   obj.controls['firstName'].setValue("Bhanu");
   obj.controls['lastName'].setValue("Khandelwal");
   obj.controls['emailId'].setValue("bhanu29k@gmail.com");
   obj.controls['gender'].setValue("male");
   obj.controls['country'].setValue("India"); 
   const dummyPosts: LoginSignup[]=[{
    firstName:"Bhanu",
    lastName:"Khandelwal",
    gender:"male",
    country:"India",
    emailId:"bhanu29k@gmail.com",
    password:"Bhanu@123",
    empId:"bhanu29k"
  }]; 
  const loginSignupServiceStub={
    addUser(loginSignup:LoginSignup){
      return of(dummyPosts[0])
    }
  }

  expect(loginSignupServiceStub.addUser(dummyPosts[0])).toBeTruthy();
  // component.onSubmit(obj);   
    //spy=spyOn(service,'addUser').and.returnValue(dummyPosts);
    expect(component.onSubmit(obj)).toBeTruthy();
  });

  it('LoginComp function test',()=>{
    let router = fixture.debugElement.injector.get(Router);

    component.logInComp();

    expect(router.navigate).toHaveBeenCalledWith(["/elogin/login"]);
  });
  
});
 