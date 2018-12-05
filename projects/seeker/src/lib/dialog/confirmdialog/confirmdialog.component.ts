import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Experience } from '../../models/experience';

@Component({
  selector: 'sek-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.css']
})
export class ConfirmdialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Experience) { }

  onCancelClick(): void {
    this.dialogRef.close('Cancel');
  }
  onConfirmClick(): void {
    this.dialogRef.close('Confirm');
  }
  ngOnInit() {
    console.log(this.data);
  }

}
