import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SeekerService } from '../../service/seeker.service';
import { SeekerServiceService } from 'projects/employeer/src/lib/services/seeker-service.service';
import { FormControl, Validators } from '@angular/forms';
import { EducationService } from '../../service/education.service';

@Component({
  selector: 'sek-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  minDate = new Date(2000, 0, 1);
  maxDate = Date.now();
  resumeid:string;
  Classes = ['Xth', 'XIIth', 'UG', 'PG', 'Diploma'];

  constructor(public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: EducationService) { }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  ngOnInit() { }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.data.resumeId=this.resumeid;
    // alert(this.resumeid+"testing inside edit")
    this.dataService.updateData(this.data);
  }
}
