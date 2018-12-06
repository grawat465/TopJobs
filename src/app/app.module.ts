import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { EloginModule, EloginComponent } from 'projects/elogin/src/public_api';
import { SloginModule } from 'projects/slogin/src/public_api';
import { SeekerModule } from 'projects/seeker/src/public_api';
import { EmployeerModule } from 'projects/employeer/src/public_api';
import { SubscriptionFeeComponent } from 'projects/elogin/src/lib/subscription-fee/subscription-fee.component';
import { LoginComponent } from 'projects/elogin/src/lib/login/login.component';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupComponent } from 'projects/elogin/src/lib/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    BlogsComponent,
    AboutusComponent,
    ContactusComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EloginModule,
    SloginModule,
    SeekerModule,
    EmployeerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
