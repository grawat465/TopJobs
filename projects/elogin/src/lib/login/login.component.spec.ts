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
import { Router } from '@angular/router';
import { EloginComponent } from '../elogin.component';
import { HomeComponent } from 'src/app/home/home.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
//import {Observable,of} from 'rxjs';

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
  beforeEach(async(() => {
    TestBed.configureTestingModule({
     // imports:[ReactiveFormsModule,FormsModule,RouterTestingModule],
      declarations: [   AppComponent,
        LoginComponent,
        SignupComponent,
        SubscriptionFeeComponent,EloginComponent ,        BrowserDynamicTestingModule
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,,
        RouterTestingModule,
      //  Observable
      ],
      providers: [SubscriptionFeeDetails,{provide:LoginSignupService,useClass:MockUser},LoginComponent,SignupComponent]
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
   // alert("bhanu");
   component.onSubmit(obj); 
 //  console.log(obj.controls['password']);
   // console.log(component.registerForm['controls'].firstName);
   const dummyPosts: LoginSignup[]=[{
      firstName:"Bhanu",
      lastName:"Khandelwal",
      gender:"male",
      country:"India",
      emailId:"bhanu@9k@gmail.com",
      password:"Bhanu@123",
      empId:"bhanu29k"
    }]; 
    spy=spyOn(service,'addUser').and.returnValue(dummyPosts);
    
  });

  it('LoginComp function test',()=>{
    component.logInComp();
  });
  
});
 