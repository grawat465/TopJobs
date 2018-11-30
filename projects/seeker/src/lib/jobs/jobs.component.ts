import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { SeekerService } from '../service/seeker.service';
import { JobApplication } from 'projects/employeer/src/lib/models/job-application';

@Component({
  selector: 'sek-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  panelOpenState = false;
  companyName:string;
  position:string;
  seekerId:string;
  // jobs=[
  //   {"jobtitle":'Lead ',"Salary":'$12345',"Perks":'no perks', "desc":'wowowow'},
  //   {"jobtitle":'Lead ',"Salary":'$12345',"Perks":'no perks', "desc":'wowowow'},
  //   {"jobtitle":'Lead ',"Salary":'$12345',"Perks":'no perks', "desc":'wowowow'},
  //   {"jobtitle":'Lead ',"Salary":'$12345',"Perks":'no perks', "desc":'wowowow'},
  // ];

  jobs:JobApplication[];

  constructor(private route:ActivatedRoute,private snackBar:MatSnackBar,private router:Router,private seekerService:SeekerService) { }

  ngOnInit() {
    this.seekerId=this.route.snapshot.paramMap.get('seekid');
    console.log(this.route.snapshot.toString());
    console.log(this.seekerId);
    this.getJobsForSeekerId();
  }


  getJobsForSeekerId(){
    this.seekerService.getJobsForSeeker(this.seekerId).subscribe(data=>{
      console.log(data);
      this.jobs=data;
      this.snackBar.open("Loaded All Jobs Successfully","DONE",{duration:3000,verticalPosition:"top"});
    });
  } 

  applyForJob(jobId:string){
    console.log(this.seekerId);
    this.seekerService.applyForJob(jobId,this.seekerId).subscribe(data=>{
      console.log(data);
      if(data){
        this.snackBar.open("Applied for Job Successfully","DONE",{duration:3000,verticalPosition:"top"});
      }
      else{
        this.snackBar.open("Application Failed","Exit",{duration:3000,verticalPosition:"top"});
      }
    });
  }

}
