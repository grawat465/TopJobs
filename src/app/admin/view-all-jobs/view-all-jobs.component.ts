import { Component, OnInit } from '@angular/core';
import { JobApplication } from 'projects/employeer/src/lib/models/job-application';
import { AdminService } from '../services/admin.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-view-all-jobs',
  templateUrl: './view-all-jobs.component.html',
  styleUrls: ['./view-all-jobs.component.css']
})
export class ViewAllJobsComponent implements OnInit {
  panelOpenState = false;
  companyName:string;
  position:string;
  jobs:JobApplication[];

  seekerService: any;
  constructor(private adminService:AdminService, public snackBar:MatSnackBar) { }

  ngOnInit() {
    this.getJobsForSeekerId();

  }


  getJobsForSeekerId(){
    this.adminService.getAllJobs().subscribe(data=>{
      console.log(data);
      this.jobs=data;
      this.snackBar.open("Loaded All Jobs Successfully","DONE",{duration:3000,verticalPosition:"top"});
    });
  } 

  deleteJob(jobId:string){
    
    this.adminService.deleteJob(jobId).subscribe(data=>{
      console.log(data);
      if(data===null){
        this.snackBar.open(" Job Successfully Deleted","DONE",{duration:3000,verticalPosition:"top"});
      }
      else{
        this.snackBar.open("Application Failed","Exit",{duration:3000,verticalPosition:"top"});
      }
    });
    window.location.reload();
  }
  
}
