import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { HttpErrorResponse , HttpClient} from '@angular/common/http';
import { JobApplication } from 'projects/employeer/src/lib/models/job-application';

@Injectable({
  providedIn: 'root'
})
export class SeekerService {

  getResumeData():any{

  }

  url:string="http://localhost:8765/seeker-service/"

  constructor(private http: HttpClient) { }

  
  getJobsForSeeker(seekid:string){
    return this.http.get<JobApplication[]>(this.url+"getJobs");
  }
  applyForJob(jobId:string,seekid:string){
    return this.http.get<boolean>(this.url+"applyForJob/"+jobId+"/"+seekid);
  }
}
