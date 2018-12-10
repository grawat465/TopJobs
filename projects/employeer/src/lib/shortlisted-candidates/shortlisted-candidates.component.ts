import { Component, OnInit } from '@angular/core';
import { ShortlistApplicants } from '../models/ShortlistApplicants';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'emp-shortlisted-candidates',
  templateUrl: './shortlisted-candidates.component.html',
  styleUrls: ['./shortlisted-candidates.component.css']
})
export class ShortlistedCandidatesComponent implements OnInit {
  constructor(private resumeService:ResumeService) { }

  displayedColumns: string[] = ['serialno', 'jobId', 'resumeId','action'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  datas: ShortlistApplicants[] ;
  formdata:ShortlistApplicants;

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  ngOnInit() {

    this.getAllApplicants();
  }
  getAllApplicants(){
    this.resumeService.getAllShortlsitedApplicants().subscribe(data=>{
      this.datas=data;
      
      //console.log(this.formdata[0]);
    });
  }
  deleteShortlist(Id:number){
    console.log(Id);
    // alert(Id);
    this.resumeService.deleteShortlistedApplicants(Id).subscribe(data=>{
      console.log(data);
      window.location.reload();
    });
  }
}


