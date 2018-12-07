import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Admin } from '../admin';
import { AdminService } from '../services/admin.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {




  ad:Admin=new Admin();
  res:boolean;
  constructor(private snackBar:MatSnackBar, private FB: FormBuilder,private router: Router, private service : AdminService) { }
  loginForm: FormGroup;

 

  ngOnInit() {
    this.createform();
  }

  createform() {
    this.loginForm = this.FB.group({
  email: ['', [Validators.required, 
  Validators.pattern("[a-z0-9]{4,12}")]],
  password : ['', [Validators.required,Validators.pattern("[a-z A-Z 0-9]{4,8}[!@#$%^]{1,2}")]]
    });
  
  }

  login () {
    console.log(this.loginForm.value);
  }


  onSubmit(obj){
    this.ad.email=obj.email;
    this.ad.password=obj.password;
  
   
    this.service.requestLogin(this.ad.email,this.ad.password).subscribe( data =>{
      this.res=data;
      if(this.res==true)
      {
        //alert("User login SuccessFully."); 
        this.snackBar.open(""+this.ad.email+" - Logged in successfully","SUCCESS",{duration:3000,verticalPosition:"top"})
        this.router.navigate(['/main']);
      }
      else{
        this.snackBar.open(""+this.ad.email+" - Log in failed ","FAILED",{duration:3000,verticalPosition:"top"})

//        alert("login failed");
      } 
      
    });
}

isLoggedIn(){
  return this.res;
}

}

 
