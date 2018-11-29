/*import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ]
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
import { DebugElement } from '@angular/core';
import { EloginComponent } from '../elogin.component';
import { HomeComponent } from 'src/app/home/home.component';
//import { Observable } from 'rxjs-compat/Observable';
//import 'rxjs-compat/add/observable/from';
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
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  AppComponent,
        LoginComponent,
        SignupComponent,
        SubscriptionFeeComponent,
        EloginComponent,
        HomeComponent
          ],
      imports:[ BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,


    //  Observable
      ],
        providers: [{provide:LoginSignupService,useClass:MockUser},SignupComponent]
    })
    .compileComponents();
    component=TestBed.get(SignupComponent);
    service=TestBed.get(LoginSignupService);
   
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
 /*   debugElement=fixture.debugElement;
    service=debugElement.injector.get(LoginSignupService);
    spy=spyOn(service,'requestLogin').and.callFake(()=>{
      return Observable.from([dummyPosts]);
      
    }); */
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
