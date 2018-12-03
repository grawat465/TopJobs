import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skl-slogin',
  template: `
   
<router-outlet></router-outlet>
  `
})
export class SloginComponent implements OnInit {


  navLinks = [
    { path: 'login', label: 'Sign In' },
    { path: 'signup', label: 'Sign Up' },
     ];
  constructor() { }

  ngOnInit() {
  }

}
