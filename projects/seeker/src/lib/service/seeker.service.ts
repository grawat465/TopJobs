import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { HttpErrorResponse , HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeekerService {
  getResumeData(): any {
    
  }
  constructor(private httpClient: HttpClient) { }

  

}
