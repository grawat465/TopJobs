import { Component, OnInit } from '@angular/core';
import { Employer } from 'src/app/models/employer';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-view-all-employers',
  templateUrl: './view-all-employers.component.html',
  styleUrls: ['./view-all-employers.component.css']
})
export class ViewAllEmployersComponent implements OnInit {

  displayedColumns: string[] = ['resumeId', 'name', 'email', 'contact', 'dob', 'details'];
  ELEMENT_DATA: Employer[];
  dataSource;// = new MatTableDataSource<Resume>(this.ELEMENT_DATA);
  //dataSource: Resume[];
 
  empId: string;
  resumeDisplay: FormGroup;
 
  constructor(private snackBar:MatSnackBar, private adminService:AdminService) { }

  ngOnInit() {
  }

  getAllEmployers() {

    // this.ELEMENT_DATA=this.resumeService.getResumeListForJob(this.empId,jobId);
    try{
      this.adminService.getAllEmployersDetails().subscribe(data => {
        console.log(data);
        
        this.dataSource = data;
      });
  
    }catch(err){
      this.snackBar.open("Error "+err,"RETRY",{duration:3000});
    }
  }


}
