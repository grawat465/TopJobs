import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SeekerService } from '../../service/seeker.service';
import { EducationService } from '../../service/education.service';
@Component({
  selector: 'sek-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  resumeid:string;
  constructor(public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: EducationService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
   
    this.dataService.deleteData(this.data.eduId);
  }


}
