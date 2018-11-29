import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sek-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  j
  constructor() { }

  ngOnInit() {
  }
  panelOpenState = false;
  companyName:String;
  position:String;
  jobs=[
    {"jobtitle":'Lead ',"Salary":'$12345',"Perks":'no perks', "desc":'wowowow'},
    {"jobtitle":'Lead ',"Salary":'$12345',"Perks":'no perks', "desc":'wowowow'},
    {"jobtitle":'Lead ',"Salary":'$12345',"Perks":'no perks', "desc":'wowowow'},
    {"jobtitle":'Lead ',"Salary":'$12345',"Perks":'no perks', "desc":'wowowow'},
  ];
}
