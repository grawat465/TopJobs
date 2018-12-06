import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';




//import { SloginService } from '../../public_api';
import { Seeker } from '../models/seeker';
import { SloginService } from '../slogin.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'skl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponentSeeker implements OnInit {

  seek: Seeker = new Seeker();
  res: boolean;
  constructor(private snackBar:MatSnackBar,private FB: FormBuilder, private router: Router, private service: SloginService) { }
  loginForm: FormGroup;



  ngOnInit() {
    this.createform();
  }

  createform() {
    this.loginForm = this.FB.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
    //Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')
  }

  login() {
    console.log(this.loginForm.value);
  }


  onSubmit(obj) {
    this.seek.username = obj.email;
    this.seek.password = obj.password;


    // if (this.loginForm.invalid) {
    // return;
    // }
    this.service.requestLogin(this.seek.username, this.seek.password).subscribe(data => {
      this.res = data;
      console.log(data);
      if (this.res === true) {
        //alert('User login SuccessFully.');
        this.snackBar.open("User Logged in Successfully","LOGIN",{duration:3000,verticalPosition:"top"});
        this.router.navigate(['/seeker/jobs',this.seek.username]);
      } else { 
        //alert('login failed'); 
        this.snackBar.open("Login Attempt failed","Retry",{duration:3000,verticalPosition:"top"});

      }

    });
  }

  isLoggedIn():boolean{
    
    return this.res;
  }

  keyDownFunction(event){
    if(event.keyCode==13){
      console.log("Enter");
      this.onSubmit(this.loginForm.value);
    }
  }

}
