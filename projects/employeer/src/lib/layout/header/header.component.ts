import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'emp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  empId:String;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.empId=this.route.snapshot.paramMap.get('empId');
    console.log(this.empId);
  }
  navigateNewForm(){
    this.router.navigate(['/employer/newForm',this.empId]);
  }
  navigateJobs(){
    this.router.navigate(['/employer/jobs',this.empId]);
  }
  navigateShortlist(){
    this.router.navigate(['/employer/shortlist',this.empId]);
  }
}