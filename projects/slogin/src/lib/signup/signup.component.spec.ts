import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponentSeeker } from './signup.component';
import { Seeker } from '../models/seeker';
import { SloginService } from '../slogin.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { SloginComponent } from '../slogin.component';
import { LoginComponentSeeker } from '../login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSnackBarModule, MatRadioModule, MatTabsModule, MatTableModule, MatListModule, MatStepperModule, MatPaginatorModule, MatChipsModule, MatAutocompleteModule } from '@angular/material';
import { HomeComponent } from 'src/app/home/home.component';
import { BlogsComponent } from 'src/app/blogs/blogs.component';
import { AboutusComponent } from 'src/app/aboutus/aboutus.component';
import { ContactusComponent } from 'src/app/contactus/contactus.component';
import { EloginComponent } from 'projects/elogin/src/public_api';
import { SignupComponent } from 'projects/elogin/src/lib/signup/signup.component';
import { EmployeerComponent } from 'projects/employeer/src/public_api';
import { LoginComponent } from 'projects/elogin/src/lib/login/login.component';
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
  public signUpUser(): Seeker[] {
    return dummyPosts;
  }
}


describe('SignupComponent', () => {
  let component: SignupComponentSeeker;
  let fixture: ComponentFixture<SignupComponentSeeker>;
  let service: SloginService;
  let spy:any;
  let httpMock:HttpTestingController ;
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
      declarations: [ SignupComponentSeeker,LoginComponentSeeker,HomeComponent,BlogsComponent,
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
        CandidateListComponent,
        ContentComponent ],
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
      providers:[SignupComponentSeeker]
     
    })
    .compileComponents();
    component=TestBed.get(SignupComponentSeeker);
    service=TestBed.get(SloginService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponentSeeker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.userDetailsForm.valid).toBeFalsy();
  });

  it(' First Name field validity', () => {
    let errors = {};
    let firstname = component.userDetailsForm.controls['firstname']; 
    expect(firstname.valid).toBeFalsy(); 
    
    errors = firstname.errors || {};
    expect(errors['required']).toBeTruthy(); 

    firstname.setValue("bhanu@");
    errors = firstname.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeTruthy();   

    firstname.setValue("Bhanu");
    errors = firstname.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeFalsy();  
  });


  it(' Last Name field validity', () => {
    let errors = {};
    let lastname = component.userDetailsForm.controls['lastname']; 
   // expect(lastName.valid).toBeFalsy(); 

    errors = lastname.errors || {};
    expect(errors['required']).toBeTruthy(); 

    lastname.setValue("bhanu@");
    errors = lastname.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeTruthy();   

    lastname.setValue("Bhanu");
    errors = lastname.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeFalsy();
  });

  it('birthday field validity', () => {
    let errors = {};
    let birthday = component.userDetailsForm.controls['birthday'];
    errors = birthday.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('Gender field validity', () => {
    let errors = {};
    let gender = component.userDetailsForm.controls['gender'];
    errors = gender.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('Phone field validity', () => {
    let errors = {};
    let Phone = component.userDetailsForm.controls['phone'];
    errors = Phone.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('City field validity', () => {
    let errors = {};
    let city = component.userDetailsForm.controls['address'].get('city');
    errors = city.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('City field pattern validity', () => {
    let errors = {};
    let city = component.userDetailsForm.controls['address'].get('city');
    city.setValue("Noida");
    errors = city.errors || {};
    expect(errors['pattern']).toBeFalsy();

    city.setValue("No");
    errors = city.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });

  it('Zipcode field validity', () => {
    let errors = {};
    let zipcode = component.userDetailsForm.controls['address'].get('zipcode');
    errors = zipcode.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('Zipcode field pattern validity', () => {
    let errors = {};
    let zipcode = component.userDetailsForm.controls['address'].get('zipcode');
    zipcode.setValue("123456");
    errors = zipcode.errors || {};
    expect(errors['pattern']).toBeFalsy();

    zipcode.setValue("1234");
    errors = zipcode.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });

  it('UserName field validity', () => {
    let errors = {};
    let username = component.userDetailsForm.controls['username'];
    errors = username.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('UserName field pattern validity', () => {
    let errors = {};
    let username = component.userDetailsForm.controls['username'];
    username.setValue("bhanu29k");
    errors = username.errors || {};
    expect(errors['pattern']).toBeFalsy();

    username.setValue("bh");
    errors = username.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });

  it('UserName field minlength validity', () => {
    let errors = {};
    let username = component.userDetailsForm.controls['username'];
    username.setValue("bhanu29k");
    errors = username.errors || {};
    expect(errors['minlength']).toBeFalsy();

    username.setValue("bh29");
    errors = username.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('UserName field maxlength validity', () => {
    let errors = {};
    let username = component.userDetailsForm.controls['username'];
    username.setValue("bhanu29k");
    errors = username.errors || {};
    expect(errors['maxlength']).toBeFalsy();

    username.setValue("bh29wfdgjkehfjrhgfdhjdgfiuegfyiudgfiuyefcuycdfdfhgdhh");
    errors = username.errors || {};
    expect(errors['maxlength']).toBeTruthy();
  });


  it('email field validity', () => {
    let errors = {};
    let email = component.userDetailsForm.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('email field pattern validity', () => {
    let errors = {};
    let email = component.userDetailsForm.controls['email'];
    email.setValue("test@gmail.com");
    errors = email.errors || {};
    expect(errors['pattern']).toBeFalsy();
  });


  it('Password field validity', () => {
    let password = component.userDetailsForm.controls['password']; 
    expect(password.valid).toBeFalsy(); 
  });

  it('password field pattern validity', () => {
    let errors = {};
    let password = component.userDetailsForm.controls['password'];
    password.setValue("bhan");
    errors = password.errors || {};
    expect(errors['pattern']).toBeTruthy();

    password.setValue("Bhanu@123");
    errors = password.errors || {};
    expect(errors['pattern']).toBeFalsy();


  });
  
  it('Confirm Password field validity', () => {
    let confirm_password = component.userDetailsForm.controls['confirm_password']; 
    expect(confirm_password.valid).toBeFalsy(); 
  });
  
  it('OnSubmit function test',() =>{
   let obj=component.userDetailsForm;
   
   obj.controls['firstname'].setValue("Bhanu");
   obj.controls['lastname'].setValue("Khandelwal");
   obj.controls['bio'].setValue("Tech leader"); 
   obj.controls['birthday'].setValue("1992/12/12"); 
   obj.controls['gender'].setValue("male");
   obj.controls['phone'].setValue("123456");
   obj.controls['address'].get('state').setValue("UP");
   obj.controls['address'].get('city').setValue("noida");
   obj.controls['address'].get('zipcode').setValue("123456");
   obj.controls['address'].get('country').setValue("India");
   obj.controls['username'].setValue("bhanu29k");
   obj.controls['email'].setValue("bhanu29k@gmail.com");
   obj.controls['password'].setValue("Bhanu@123");

   // alert("bhanu");
   component.onSubmit(obj); 
 //  console.log(obj.controls['password']);
   // console.log(component.registerForm['controls'].firstName);
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
    spy=spyOn(service,'signUpUser').and.returnValue(dummyPosts);
    
  });

  
  
});
