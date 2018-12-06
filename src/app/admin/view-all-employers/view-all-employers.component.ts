import { Component, OnInit } from '@angular/core';
import { Employer } from 'src/app/models/employer';
import { FormGroup } from '@angular/forms';
import { MatSnackBar, MatTableDataSource } from '@angular/material';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-all-employers',
  templateUrl: './view-all-employers.component.html',
  styleUrls: ['./view-all-employers.component.css']
})
export class ViewAllEmployersComponent implements OnInit {

  displayedColumns: string[] = ['empId', 'firstName', 'email', 'lastName','password'];
  ELEMENT_DATA: Employer[];
  dataSource ;//= new MatTableDataSource<Employer>(this.ELEMENT_DATA);
  //dataSource: Resume[];
 
  empId: string;
  resumeDisplay: FormGroup;
 
  constructor(private snackBar:MatSnackBar, private adminService:AdminService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getAllEmployers();
  }

  getAllEmployers() {

    // this.ELEMENT_DATA=this.resumeService.getResumeListForJob(this.empId,jobId);
    try{
      this.adminService.getAllEmployersDetails().subscribe(data => {
        console.log(data);
        this.ELEMENT_DATA=data;
        //this.dataSource = data;
        this.dataSource = new MatTableDataSource<Employer>(this.ELEMENT_DATA);

      });
  
    }catch(err){
      this.snackBar.open("Error "+err,"RETRY",{duration:3000});
    }
  }

   deleteEmployerById(id:string){
    console.log("DELETE CALLED"+id);
    try{
      this.adminService.deleteEmployersDetails(id).subscribe(data => {
        console.log(data);


      });
      window.location.reload();
    }catch(err){
      this.snackBar.open("Error "+err,"RETRY",{duration:3000});
    }

   }


}
