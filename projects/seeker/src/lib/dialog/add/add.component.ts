
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormControl } from '@angular/forms';
import { SeekerService } from '../../service/seeker.service';
import { Education } from '../../models/education';
import { EducationService } from '../../service/education.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'sek-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formControl: FormControl;
  seekid:string;
  resumeid:string; // to receive the injected value from parent component

  constructor(public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Education, public snackbar:MatSnackBar, public dataService:EducationService, private router:ActivatedRoute, private seekerService:SeekerService) { }




  Classes = ['Xth', 'XIIth', 'UG', 'PG', 'Diploma'];
  Boards = ['CBSE', 'STATE', 'ICSE', 'B.Tech', 'B.A', 'M.Tech', 'M.S.'];
  validation_messages = {
    'institute': [
      { type: 'pattern', message: 'No special characters are allowed' },
      { type: 'required', message: 'Full name is required' }
    ]
  };

  minDate = new Date(2000, 0, 1);
  maxDate = Date.now();
  



  ngOnInit() {
    // this.router.snapshot.paramMap.get('seekid');
    // this.snackbar.open(this.seekid,'seekid',{
    //   duration: 3000,horizontalPosition:"right",verticalPosition:"top"})
    // this.getResumeID();
    // this.snackbar.open(this.resumeid,'resumeid',{
    //   duration: 3000,horizontalPosition:"right",verticalPosition:"top"})

  }
 
  getErrorMessage() {
    
  }
  
  // // getResumeID() {
  // //   this.seekerService.getResumeData(this.seekid).subscribe(data => {
  // //     this.resumeid = data.resumeId;
  // //   });
   
  // }
  submit() {
    // empty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    
    this.data.resumeId=this.resumeid;
    
    console.log(this.data.resumeId+ " INS"+this.data.institution+"board "+ this.data.degree+" start date"+this.data.startdate+"  end:"+this.data.enddate);
    // alert( this.data.resumeId+ " INS"+this.data.institution+"board "+ this.data.degree+" start date"+this.data.startdate+"  end:"+this.data.enddate);
    
    this.dataService.addData(this.data);
  }


}
