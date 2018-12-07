import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { EloginModule } from 'projects/elogin/src/public_api';
import { SloginModule } from 'projects/slogin/src/public_api';
import { SeekerModule } from 'projects/seeker/src/public_api';
import { EmployeerModule } from 'projects/employeer/src/public_api';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatProgressBarModule } from '@angular/material';
import { HeaderComponent } from './layout/header/header.component';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './security/auth.guard';




@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    BlogsComponent,
    AboutusComponent,
    ContactusComponent,
    HeaderComponent,
    
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EloginModule,
    SloginModule,
    SeekerModule,
    EmployeerModule,
    AdminModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule
    //LoadingBarRouterModule,
   // LoadingBarModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
