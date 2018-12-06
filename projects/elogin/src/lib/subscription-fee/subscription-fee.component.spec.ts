import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionFeeComponent } from './subscription-fee.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../../../../src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SubscriptionFeeDetails } from '../services/subscription-fee-details';
import { LoginSignupService } from '../services/login-signup.service';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
//import { AppComponent } from '../../../../../src/app/app.component';
import { EloginComponent } from '../elogin.component';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { ContentComponent } from 'projects/employeer/src/lib/layout/content/content.component';
import { HomeComponent } from 'src/app/home/home.component';
import { BlogsComponent } from 'src/app/blogs/blogs.component';
import { AboutusComponent } from 'src/app/aboutus/aboutus.component';
import { ContactusComponent } from 'src/app/contactus/contactus.component';
import { EloginModule } from '../elogin.module';
import { SloginModule, SloginComponent } from 'projects/slogin/src/public_api';
import { SeekerModule, SeekerComponent } from 'projects/seeker/src/public_api';
import { EmployeerModule, EmployeerComponent } from 'projects/employeer/src/public_api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewJobComponent } from 'projects/employeer/src/lib/new-job/new-job.component';
import { PostedJobsComponent } from 'projects/employeer/src/lib/posted-jobs/posted-jobs.component';
import { ShortlistedCandidatesComponent } from 'projects/employeer/src/lib/shortlisted-candidates/shortlisted-candidates.component';
import { ResumeComponent } from 'projects/seeker/src/lib/resume/resume.component';
import { JobsComponent } from 'projects/seeker/src/lib/jobs/jobs.component';
import { SignupComponentSeeker } from 'projects/slogin/src/lib/signup/signup.component';
import { LoginComponentSeeker } from 'projects/slogin/src/lib/login/login.component';
import { CandidateListComponent } from 'projects/employeer/src/lib/candidate-list/candidate-list.component';
import { ContentComponent as ContentComponent1 } from 'src/app/layout/content/content.component';
import { ContentComponent as ContentComponent2} from 'projects/seeker/src/lib/layout/content/content.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSnackBarModule, MatRadioModule, MatTableModule, MatListModule, MatTabsModule, MatStepperModule, MatPaginatorModule, MatChipsModule, MatAutocompleteModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

describe('SubscriptionFeeComponent', () => {
  let component: SubscriptionFeeComponent;
  let fixture: ComponentFixture<SubscriptionFeeComponent>;
  let service:LoginSignupService;
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
      declarations: [ SubscriptionFeeComponent,LoginComponent,SignupComponent,EloginComponent,AppComponent,
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
      imports:[ BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
  
        BrowserAnimationsModule,RouterTestingModule,
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
   
      ],
        providers: [SubscriptionFeeDetails,{provide:LoginSignupService},LoginComponent,SignupComponent,SubscriptionFeeComponent]
    })
    .compileComponents();
    component=TestBed.get(SubscriptionFeeComponent);
    service=TestBed.get(LoginSignupService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.subscriptionFeeForm.valid).toBeFalsy();
  });

  it(' Bank Name field validity', () => {
    let errors = {};
    let bankName = component.subscriptionFeeForm.controls['bankName']; 
    expect(bankName.valid).toBeFalsy(); 
    
    errors = bankName.errors || {};
    expect(errors['required']).toBeTruthy(); 

    bankName.setValue("icici");
    errors = bankName.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeTruthy();   

    bankName.setValue("Icici");
    errors = bankName.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeFalsy();  
  });

  it(' Card Name field validity', () => {
    let errors = {};
    let cardName = component.subscriptionFeeForm.controls['cardName']; 
    expect(cardName.valid).toBeFalsy(); 
    
    errors = cardName.errors || {};
    expect(errors['required']).toBeTruthy(); 

    cardName.setValue("debit");
    errors = cardName.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeTruthy();   

    cardName.setValue("Debit");
    errors = cardName.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeFalsy();  
  });

  
  it(' Fee field validity', () => {
    let errors = {};
    let fee = component.subscriptionFeeForm.controls['fee']; 
    expect(fee.valid).toBeTruthy(); 
    
   errors = fee.errors || {};
   expect(errors['required']).toBeUndefined(); 

    });

    
  it(' Card No field validity', () => {
    let errors = {};
    let cardNo = component.subscriptionFeeForm.controls['cardNo']; 
    expect(cardNo.valid).toBeFalsy(); 
    
    errors = cardNo.errors || {};
    expect(errors['required']).toBeTruthy(); 

    cardNo.setValue("098765");
    errors = cardNo.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeTruthy();   

    cardNo.setValue("12345678");
    errors = cardNo.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeFalsy();  
  });

  it(' terms field validity', () => {
    let errors = {};
    let terms = component.subscriptionFeeForm.controls['terms']; 
    expect(terms.valid).toBeFalsy(); 
    
    errors = terms.errors || {};
    expect(errors['required']).toBeTruthy(); 

    });

    it('onsubmit function testing',()=>{
      let obj=component.subscriptionFeeForm;
      obj.controls['bankName'].setValue("Icici");
      obj.controls['cardName'].setValue("Sbi");
      obj.controls['fee'].setValue("400");
      obj.controls['cardNo'].setValue("12345678");
      component.onSubmit(obj);
      
    });
    
    
  

});
