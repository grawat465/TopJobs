import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

@NgModule({
  declarations: [AdminloginComponent, AdmindashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,MatCardModule,MatFormFieldModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule
    ,MatInputModule
  ]
})
export class AdminModule { }
