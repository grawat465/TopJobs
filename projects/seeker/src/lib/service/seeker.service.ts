import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { HttpErrorResponse , HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeekerService {
  getResumeData(): any {
    throw new Error("Method not implemented.");
  }
  constructor(private httpClient: HttpClient) { }

  

}
