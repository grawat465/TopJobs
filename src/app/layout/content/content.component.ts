import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  empId:string="";
  seekId:string="";
  fullRoute:string="";

  constructor(private route:ActivatedRoute,private router:Router) { 
    route.params.subscribe(params=>{
      console.log(params);
      if(params['employer']){
        console.log("SUCCESS");
      }
    });
  }

  ngOnInit() {

  }

  ngOnChange(){
    this.fullRoute=this.route.snapshot.toString();
    console.log(this.fullRoute);
  }

}
