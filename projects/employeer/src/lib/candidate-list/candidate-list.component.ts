import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Resume } from '../models/Resume';
import { ResumeService } from '../services/resume.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EducationDetails } from '../models/EducationDetails';
import { ExperienceDetails } from '../models/ExperienceDetails';
import { Skills } from '../models/Skills';
import { SeekerService } from 'projects/seeker/src/public_api';
import { SeekerServiceService } from '../services/seeker-service.service';


@Component({
  selector: 'emp-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  @Input('init')
  jobId:string;
  displayedColumns: string[] = ['resumeId', 'name', 'email', 'contact', 'dob', 'details'];
  ELEMENT_DATA:Resume[];
  //dataSource = new MatTableDataSource<Resume>(this.ELEMENT_DATA);
  dataSource:Resume[];
  selection = new SelectionModel<Resume>(true, []);
  empId:string;
  resumeDisplay:FormGroup;

  constructor(private FB:FormBuilder, private resumeService:ResumeService,private route:ActivatedRoute,private dialog:MatDialog){

  }
  ngOnInit(){
    this.empId=this.route.snapshot.paramMap.get("empId");
    console.log(this.jobId);
    this.getResumeListForJob(this.jobId);
  }
  getResumeListForJob(jobId:string){

    this.resumeService.getResumeListForJob(this.empId,jobId).subscribe(data=>{
      console.log(data);
      this.ELEMENT_DATA=data;
      this.dataSource=data;
    });
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.forEach(row => this.selection.select(row));
  }
  openDialog(resume:string) {
    const dialog:DialogConfig={
      resumeId:resume
    };
    const dialogRef = this.dialog.open(ResumeContentDialog,{data:dialog});
   
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

export interface DialogConfig {

  resumeId?: string,

}


@Component({
  selector: 'resume-content-dialog',
  templateUrl: 'resume-dialog.html',
})
export class ResumeContentDialog {
  @Input('resumeId')
  resumeId:string;
  resumeDisplay:FormGroup;
  expDisplay:Array<FormGroup>;
  eduDisplay:FormGroup[];
  resume:Resume;
  eduDetails:EducationDetails[];
  expDetails:ExperienceDetails[];
  skill:Skills;
  newFormGroup:FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogConfig,public dialogRef: MatDialogRef<ResumeContentDialog>, private seekerService:SeekerServiceService  ) {
    this.resumeId=data.resumeId;
    console.log(this.resumeId);
    //this.getResumeData();
    //this.getExp();
    //this.getEdu();

  }

  get dialog():DialogConfig{
    return this.data;
  }
  ngOnInit(){
    this.getResumeData();
    // this.resumeDisplay=new FormGroup({
    //   name:new FormControl(),
    //   mobileno:new FormControl(),
    //   dob:new FormControl(),
    //   resumeId:new FormControl(),
    //   email:new FormControl()
    // });

    this.getExp();
    // for(let exp of this.expDetails){
    //   this.expDisplay.push(new FormGroup({
    //     companyName:new FormControl(),
    //     noOfYears:new FormControl(),
    //     position:new FormControl(),
    //     description:new FormControl()
    //   }));
    // }

    this.getEdu();
    // for(let edu of this.eduDetails){
    //   this.expDisplay.push(new FormGroup({
    //     degree:new FormControl(),
    //     score:new FormControl(),
    //     institution:new FormControl(),
    //     startdate:new FormControl(),
    //     enddate:new FormControl(),
    //     board:new FormControl()
    //   }));
    // }

  }
  getResumeData(){
  this.seekerService.getResumeDetails(this.resumeId).subscribe(data=>{
    this.resume=data;
    console.log(this.resume);
    this.resumeDisplay.setValue({
      name:data.name,
      mobileno:data.contact,
      dob:data.dob,
      resumeId:data.resumeId,
      email:data.email
    });
    this.resumeDisplay.disable();

    });
  }
  getExp(){
    this.seekerService.getExpDetails(this.resumeId).subscribe(data=>{
      //this.expDetails=data;

      this.newFormGroup = new FormGroup({
        companyName:new FormControl(),
        noOfYears:new FormControl(),
        position:new FormControl(),
        description:new FormControl()
      });


      console.log(data);
      let i=0;
      for(let i=0;i<data.length;i++){
        this.expDisplay[i].setValue({
          companyName:data[i].companyName,
          noOfYears:data[i].noOfYears,
          position:data[i].position,
          description:data[i].description
        });
        
        i=i+1;
      }
    });
  }
  getEdu(){
    this.seekerService.getEduDetails(this.resumeId).subscribe(data=>{
      this.eduDetails=data;
    });
  }

}