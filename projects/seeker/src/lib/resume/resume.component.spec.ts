import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponent, ExampleDataSource } from './resume.component';
import { SeekerService } from '../seeker.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSnackBarModule, MatRadioModule, MatTabsModule, MatTableModule, MatListModule, MatStepperModule, MatPaginatorModule, MatChipsModule, MatAutocompleteModule, MatMenuModule, MatFormFieldModule, MatSortModule, MatToolbarModule, MatDialogModule, MatExpansionModule,MatChipInputEvent, MatChipInput, MatAutocompleteSelectedEvent } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { SeekerComponent } from '../seeker.component';
import { JobsComponent } from '../jobs/jobs.component';
import { CommonModule } from '@angular/common';
import { SeekerRoutingModule } from '../seeker-routing.module';
import { EmployerRoutingModule } from 'projects/employeer/src/lib/employeer-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from 'src/app/home/home.component';
import { ContactusComponent } from 'src/app/contactus/contactus.component';
import { AboutusComponent } from 'src/app/aboutus/aboutus.component';
import { BlogsComponent } from 'src/app/blogs/blogs.component';
import { EloginComponent } from 'projects/elogin/src/public_api';
import { SignupComponent } from 'projects/elogin/src/lib/signup/signup.component';
import { EmployeerComponent } from 'projects/employeer/src/public_api';
import { LoginComponent } from 'projects/elogin/src/lib/login/login.component';
import { NewJobComponent } from 'projects/employeer/src/lib/new-job/new-job.component';
import { PostedJobsComponent } from 'projects/employeer/src/lib/posted-jobs/posted-jobs.component';
import { ShortlistedCandidatesComponent } from 'projects/employeer/src/lib/shortlisted-candidates/shortlisted-candidates.component';
import { SloginComponent } from 'projects/slogin/src/public_api';
import { SignupComponentSeeker } from 'projects/slogin/src/lib/signup/signup.component';
import { CandidateListComponent } from 'projects/employeer/src/lib/candidate-list/candidate-list.component';
import { LoginComponentSeeker } from 'projects/slogin/src/lib/login/login.component';
import { ContentComponent } from 'projects/seeker/src/lib/layout/content/content.component';
import { Issue } from '../models/Issue';
import { AddComponent } from '../dialog/add/add.component';
import { EditComponent } from '../dialog/edit/edit.component';
import { DeleteComponent } from '../dialog/delete/delete.component';
import { SeekerModule } from '../seeker.module';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;
  let service:SeekerService;
  const routes: Routes = [
    {
       path: 'seeker', component : SeekerComponent, children: [
         {
       path : 'resume', component : ResumeComponent
         },
         {
       path : 'jobs', component: JobsComponent
         },
         {path:'**',component:JobsComponent}
   
   ]
    }
   ];
   

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeComponent,HomeComponent,BlogsComponent,
        AboutusComponent,
        ContactusComponent,
        EloginComponent,SignupComponent,
        LoginComponent,EmployeerComponent,
        NewJobComponent,
        PostedJobsComponent,
        ShortlistedCandidatesComponent,
        SeekerComponent,
        ResumeComponent,
        JobsComponent,
        SloginComponent,
        SignupComponentSeeker,
        CandidateListComponent,LoginComponentSeeker,ContentComponent,EditComponent ],
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
       
       MatStepperModule,
       MatPaginatorModule,
       MatChipsModule,
       MatAutocompleteModule,
       RouterModule.forRoot(routes),
       CommonModule,
       SeekerRoutingModule,
       EmployerRoutingModule,
       MatMenuModule,
       LayoutModule,     
       MatFormFieldModule,
       FormsModule,
       
       
       MatTableModule,
       MatSortModule,
       MatToolbarModule,
      
       MatDialogModule,
       HttpClientModule,
       MatExpansionModule,
       MatListModule,
       RouterModule.forRoot(routes),
    
      ],
      
      providers:[ResumeComponent,SeekerService]
  
    })
    .compileComponents();
    component=TestBed.get(ResumeComponent);
   
    service=TestBed.get(SeekerService);
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('First Form validation',()=>{
    expect(component.firstFormGroup.valid).toBeFalsy();
  });

  it('Second Form validation',()=>{
    expect(component.secondFormGroup.valid).toBeFalsy();
  });

  it('Third Form validation',()=>{
    expect(component.thirdFormGroup.valid).toBeFalsy();
  });

  it('add function testing',()=>{
    let event:MatChipInputEvent;
    component.add(event);
    
   });

 it('Remove function testing',()=>{

  component.remove("b");
  
 });

 it('selected function testing',()=>{
  let event:MatAutocompleteSelectedEvent;
  component.selected(event);
  
 });

 it('Refresh function testing',()=>{

  component.refresh();
 });

 it('addNew function testing',()=>{
  let issue:Issue
  component.addNew(issue);
 });

 it('startEdit function testing',()=>{
  
  component.startEdit(1,2,'hello','UP','localhost//:8080','29/12/2012','12/03/2016');
 });

 it('deleteItem function testing',()=>{
  
  component.deleteItem(1,2,'hello','UP','localhost//:8080');
 });

 it('loadData function testing',()=>{
  
  component.loadData();
 });

 //it('filter function testing',()=>{
  //let data:Issue[];
  //exaComponent.sortData(data);
 //});


  
});
