import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EloginComponent } from './elogin.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SubscriptionFeeComponent } from './subscription-fee/subscription-fee.component';
import { EloginRoutingModule } from './elogin-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SubscriptionFeeDetails } from './services/subscription-fee-details';
import { LoginSignupService } from './services/login-signup.service';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('EloginComponent', () => {
  let component: EloginComponent;
  let fixture: ComponentFixture<EloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EloginComponent],
      imports: [
        EloginRoutingModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatTabsModule,
        HttpClientTestingModule,
        SignupComponent,
        LoginComponent,
        SubscriptionFeeComponent
      ],
      providers:[LoginComponent,SignupComponent,SubscriptionFeeComponent],
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
