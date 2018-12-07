import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponentSeeker } from 'projects/slogin/src/lib/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private login:LoginComponentSeeker,private route:Router){}


  canActivate():boolean{
    
    if(this.login.isLoggedIn()){
      return true;
    }
    else{
      this.route.navigate(['/slogin/login']);
      return false;
    }
    
  }
}
