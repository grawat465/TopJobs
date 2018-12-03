import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { HttpErrorResponse , HttpClient} from '@angular/common/http';
import { JobApplication } from 'projects/employeer/src/lib/models/job-application';
import { Resume } from 'projects/employeer/src/lib/models/resume';

@Injectable({
  providedIn: 'root'
})
export class SeekerService {

  url:string="http://192.168.252.38:8765/seeker-service/"

  constructor(private http: HttpClient) { }

  getResumeData(seekerid:string){
    return this.http.get<Resume>(this.url+"/getResumeBySeeker/"+seekerid);
  }
  getJobsForSeeker(seekid:string){
    return this.http.get<JobApplication[]>(this.url+"getJobs");
  }
  applyForJob(jobId:string,seekid:string){
    return this.http.get<boolean>(this.url+"applyForJob/"+jobId+"/"+seekid);
  }
}
