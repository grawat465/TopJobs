import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MatExpansionModule, MatGridListModule, MatTableDataSource, MatTableModule } from '@angular/material';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminComponent } from './admin.component';
import { ViewAllJobsComponent } from './view-all-jobs/view-all-jobs.component';
import { ViewAllEmployersComponent } from './view-all-employers/view-all-employers.component';
import { DashlayoutComponent } from './dashlayout/dashlayout.component';

@NgModule({
  declarations: [AdminloginComponent, AdmindashboardComponent, AdminComponent, ViewAllJobsComponent, ViewAllEmployersComponent, DashlayoutComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule,

    MatTableModule,
    BrowserAnimationsModule
    ,MatInputModule
  ]
})
export class AdminModule { }
