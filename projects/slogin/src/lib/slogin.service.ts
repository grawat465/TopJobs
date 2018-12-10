import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seeker } from './models/seeker';

@Injectable({
  providedIn: 'root'
})
export class SloginService {

  private userUrl = 'http://localhost:8765/seeker-registration';
 // private userUrl='/seeker-registration';
  constructor(private httpClient: HttpClient) { }


  public requestLogin(username, password) {

    return this.httpClient.get<boolean>(this.userUrl + '/seeker/login/' + username + '/' + password);
  }
  public signUpUser(seeker:Seeker) {

    return this.httpClient.post<Seeker>(this.userUrl + '/seeker/signup', seeker);
  }

}
