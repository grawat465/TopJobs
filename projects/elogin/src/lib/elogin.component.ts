import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eml-Elogin',
  template: `
  
    <router-outlet></router-outlet>
    
  `,
  styles: []
})
export class EloginComponent implements OnInit {
  navLinks = [
    { path: 'login', label: 'Sign In' },
    { path: 'signup', label: 'Sign Up' },
     ];
  constructor() { }

  ngOnInit() {
  }

}
