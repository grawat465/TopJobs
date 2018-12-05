import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeekerComponent } from './seeker.component';

import { ResumeComponent } from './resume/resume.component';
import { JobsComponent } from './jobs/jobs.component';
import { AddComponent } from './dialog/add/add.component';
import { EditComponent } from './dialog/edit/edit.component';
import { DeleteComponent } from './dialog/delete/delete.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';
import { SeekerRoutingModule } from './seeker-routing.module';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule,
  MatButtonModule, MatStepperModule, MatFormFieldModule, MatTableModule,
  MatSortModule, MatToolbarModule, MatPaginatorModule, MatDialogModule,
  MatSelectModule, MatChipsModule, MatAutocompleteModule, MatExpansionModule,
  MatListModule,
  MatInputModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatRadioModule,
  MatTabsModule,
  MatProgressBarModule,
  } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { EmployerRoutingModule } from 'projects/employeer/src/lib/employeer-routing.module';
import { EducationdetailsformComponent } from './forms/educationdetailsform/educationdetailsform.component';
import { ExperiencedetailsformComponent } from './forms/experiencedetailsform/experiencedetailsform.component';
import { BasicinfoComponent } from './forms/basicinfo/basicinfo.component';
import { ConfirmdialogComponent } from './dialog/confirmdialog/confirmdialog.component';

@NgModule({
  declarations: [SeekerComponent, ResumeComponent,
    JobsComponent, AddComponent, EditComponent,
    DeleteComponent, HeaderComponent, FooterComponent, ContentComponent, EducationdetailsformComponent, ExperiencedetailsformComponent, BasicinfoComponent, ConfirmdialogComponent],
  imports: [
    CommonModule,
    SeekerRoutingModule,
    EmployerRoutingModule,
    MatGridListModule,
    MatCardModule,
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
    MatMenuModule,
    
    MatButtonModule,
    LayoutModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatStepperModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatDialogModule,
    HttpClientModule,
    MatSelectModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    MatProgressBarModule

  ],
  entryComponents: [
    AddComponent,
    EditComponent,
    DeleteComponent,
    ConfirmdialogComponent
  ],
  exports: [SeekerComponent]
})
export class SeekerModule { }
