import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TopJobs';
  empId:string="";
  today: number = Date.now();
  seekId:string="";
  fullRoute:string="";
  employer:boolean=false;
  seeker:boolean=false;
  slogin:boolean=false;
  elogin:boolean=false;
  home:boolean=false;
  route:Array<string>;
  constructor(private location: Location,private router:Router,private routing:ActivatedRoute) { 

    router.events.subscribe((val)=>{
      if(location.path()!= ''){
        this.fullRoute=location.path();
        this.route=this.fullRoute.split('/');
        //console.log(this.route);
        if(this.route.indexOf('employer') != -1){
          //this.empId=this.routing.snapshot.paramMap.get('empId');
          this.empId=this.route[3];
          //console.log(this.empId);
          this.employer=true;
          this.seeker=false;
          this.slogin=false;
          this.elogin=false;
        }
        else if(this.route.indexOf('seeker') != -1){
          
          this.employer=false;
          this.seeker=true;
          this.slogin=false;
          this.elogin=false;
        }
        else if(this.route.indexOf('elogin') != -1){

          this.employer=false;
          this.seeker=false;
          this.slogin=false;
          this.elogin=true;
        }
        else if(this.route.indexOf('slogin')!= -1){
          this.employer=false;
          this.seeker=false;
          this.slogin=true;
          this.elogin=false;
        }
      }
      //console.log(this.fullRoute);
    });
  }

  ngOnInit() {
  }
  navigateNewForm(){
    //this.empId=this.routing.snapshot.paramMap.get("empId");
    //this.empId=this.location[2];
    console.log(this.empId);
    this.router.navigate(['/employer/newjob',this.empId]);
  }
  navigateJobs(){
    this.router.navigate(['/employer/jobs',this.empId]);
  }
  navigateShortlist(){
    this.router.navigate(['/employer/shortlist',this.empId]);
  }
  eloginLogin(){
    this.router.navigate(['/elogin/login']);
  }
  eloginSignup(){
    this.router.navigate(['/elogin/signup']);
  }

  seekerCreateResume(){
    this.router.navigate(['/seeker/resume',this.seekId])
  }

  seekerSearchJobs(){
    this.router.navigate(['/seeker/jobs',this.seekId])
  }

  logoutSeeker() {
    this.router.navigate(['/home',this.seekId])
  }

  sloginLogin(){
    this.router.navigate(['/slogin/login']);
  }

  sloginSignup() {
    this.router.navigate(['/slogin/signup']);
  }
  employerLogout(){
    this.router.navigate(['']);
  }

}


