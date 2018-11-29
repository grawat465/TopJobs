
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { SeekerService } from '../../service/seeker.service';
import { Education } from '../../models/education';
import { EducationService } from '../../service/education.service';


@Component({
  selector: 'sek-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formControl: FormControl;


  constructor(public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Education, public dataService:EducationService) { }




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
  }

  getErrorMessage() {
    
  }

  submit() {
    // empty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    console.log(this.data.id+ " INS"+this.data.instituteName+"board "+ this.data.level+" start date"+this.data.started_at+"  end:"+this.data.ended_at);
    alert( this.data.id+ " INS"+this.data.instituteName+"board "+ this.data.level+" start date"+this.data.started_at+"  end:"+this.data.ended_at);
    this.dataService.addData(this.data);
  }


}
