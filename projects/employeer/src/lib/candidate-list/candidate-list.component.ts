import { Component, OnInit, Input, Inject, Output } from '@angular/core';
import { MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef, MatSnackBar } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Resume } from '../models/Resume';
import { ResumeService } from '../services/resume.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, FormArray, AbstractControl } from '@angular/forms';
import { EducationDetails } from '../models/EducationDetails';
import { ExperienceDetails } from '../models/ExperienceDetails';
import { Skills } from '../models/Skills';
import { SeekerServiceService } from '../services/seeker-service.service';


@Component({
  selector: 'emp-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  @Input('init')
  jobId: string;
  displayedColumns: string[] = ['resumeId', 'name', 'email', 'contact', 'dob', 'details'];
  ELEMENT_DATA: Resume[];
  dataSource;// = new MatTableDataSource<Resume>(this.ELEMENT_DATA);
  //dataSource: Resume[];
  selection = new SelectionModel<Resume>(true, []);
  empId: string;
  resumeDisplay: FormGroup;

  constructor(private snackBar:MatSnackBar,private FB: FormBuilder, private resumeService: ResumeService,
     private route: ActivatedRoute, private dialog: MatDialog) {

  }

  ngOnInit() {
    this.empId = this.route.snapshot.paramMap.get("empId");
    console.log(this.jobId);
    this.getResumeListForJob(this.jobId);
  }

  getResumeListForJob(jobId: string) {

    // this.ELEMENT_DATA=this.resumeService.getResumeListForJob(this.empId,jobId);
    try{
      this.resumeService.getResumeListForJob(this.empId, jobId).subscribe(data => {
        console.log(data);
        this.ELEMENT_DATA = data;
        this.dataSource = new MatTableDataSource<Resume>(this.ELEMENT_DATA);;
      });
  
    }catch(err){
      this.snackBar.open("Error "+err,"RETRY",{duration:3000});
    }
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */

  openDialog(resume: string) {
    const dialog: DialogConfig = {
      resumeId: resume
    };
    const dialogRef = this.dialog.open(ResumeContentDialog, { data: dialog });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      //return result;

      if(result){
        this.resumeService.sendShortlist(resume,this.jobId,this.empId);
      }
      else if(result == null){
        console.log(result);
      }
      else{
        this.deleteResume(resume);
      }
    });
  }

  deleteResume(resumeId:string){
    this.resumeService.deleteResumeFromJobApplication(this.jobId,resumeId).subscribe(data=>{
      this.snackBar.open("Delete SUCCESS"+data,"",{duration:3000});
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
  resumeId: string;
  resumeDisplay: FormGroup;
  expDisplay:FormArray;
  eduDisplay:FormArray;
  @Output('shortlist')
  shortlist:boolean=false;
  //expDisplay: Array<FormGroup>;
  //eduDisplay: FormGroup[];
  resume: Resume;
  eduDetails: EducationDetails[];
  expDetails: ExperienceDetails[];
  skill: Skills;
  newFormGroup: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogConfig, public dialogRef: MatDialogRef<ResumeContentDialog>, private seekerService: SeekerServiceService,private formBuilder:FormBuilder) {
    this.resumeId = data.resumeId;
    console.log(this.resumeId);
    //this.getResumeData();
    //this.getExp();
    //this.getEdu();

  }

  get dialog(): DialogConfig {
    return this.data;
  }
  ngOnInit() {
    this.getResumeData();


    this.getExp();
    // for(let exp of this.expDetails){
    //   this.expDisplay.push(new FormGroup({
    //     companyName:new FormControl(),
    //     noOfYears:new FormControl(),
    //     position:new FormControl(),
    //     description:new FormControl()
    //   }));
    // }
    //this.expDisplay=this.formBuilder.array([ this.returnEduDetails() ]);
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

  returnEduDetails(){
    return this.formBuilder.group({
      degree:'',
      score:'',
      institution:'',
      startdate:'',
      enddate:'',
      board:''
    });
  }

  addEduDetials(){
    this.eduDisplay.push(this.returnEduDetails());
  }

  getResumeData() {
        this.resumeDisplay=new FormGroup({
      name:new FormControl(),
      mobileno:new FormControl(),
      dob:new FormControl(),
      resumeId:new FormControl(),
      email:new FormControl()
    });
    this.seekerService.getResumeDetails(this.resumeId).subscribe(data => {
      this.resume = data;
      this.resumeDisplay.setValue({
        name: data.name,
        mobileno: data.contact,
        dob: data.dob,
        resumeId: data.resumeId,
        email: data.email
      });
      //this.resumeDisplay.disable();

    });
  }
  getExp() {
    this.seekerService.getExpDetails(this.resumeId).subscribe(data => {
      //this.expDetails=data;

      // this.newFormGroup = new FormGroup({
      //   companyName: new FormControl(),
      //   noOfYears: new FormControl(),
      //   position: new FormControl(),
      //   description: new FormControl()
      // });

      this.expDetails = data;
      console.log(data);
      console.log(this.expDetails);
      // this.expDisplay.push(this.newFormGroup);
      // for (FormGroup f : this.expDisplay) {
      //   this.newFormGroup.setValue({
      //     companyName: this.expDetails[i].companyName,
      //     noOfYears: this.expDetails[i].noOfYears,
      //     position: this.expDetails[i].position,
      //     description: this.expDetails[i].description
      //   });
      //   console.log("FORM GROUP",this.newFormGroup);
      //   this.expDisplay.push(this.newFormGroup);
        
      // }
      console.log("expDisplay",this.expDisplay);
    });
  }
  getEdu() {
    // this.newFormGroup = new FormGroup({
    //   degree: new FormControl(),
    //   score: new FormControl(),
    //   institution: new FormControl(),
    //   startdate: new FormControl(),
    //   enddate:new FormControl(),
    //   board:new FormControl()
    // });
    // this.eduDisplay=new FormArray([this.newFormGroup]);
    this.seekerService.getEduDetails(this.resumeId).subscribe(data => {
      this.eduDetails = data;
      // for(let i=0;i<this.eduDetails.length;i++){

      //   this.newFormGroup.setValue({
      //     degree: this.eduDetails[i].degree,
      //     score: this.eduDetails[i].score,
      //     institution: this.eduDetails[i].institution,
      //     startdate: this.eduDetails[i].startdate,
      //     enddate: this.eduDetails[i].enddate,
      //     board: this.eduDetails[i].board
      //   });
      //   console.log(this.newFormGroup);
      //   this.eduDisplay.push(this.newFormGroup);
      //   i=i+1;
      // }
      // console.log("tester");
      // console.log(this.eduDetails);

      // console.log(this.eduDisplay);
    });
  }

  shortlistFcn(){
    this.shortlist=true;
  }

}