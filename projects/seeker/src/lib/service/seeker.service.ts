import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { HttpErrorResponse , HttpClient} from '@angular/common/http';
import { JobApplication } from 'projects/employeer/src/lib/models/job-application';
import { Resume } from 'projects/employeer/src/lib/models/resume';

@Injectable({
  providedIn: 'root'
})
export class SeekerService {

  url:string="http://localhost:8765/seeker-service/"

  constructor(private http: HttpClient) { }
<<<<<<< HEAD
  
  

  getResumeData(seekerid:string){
    alert(seekerid);
    return this.http.get<Resume>(this.url+"getResumeBySeeker/"+seekerid);
  }

=======

  getResumeData(seekerid:string){
    return this.http.get<Resume>(this.url+"/getResumeBySeeker/"+seekerid);
  }
>>>>>>> 0ca03663acad74eff545bb3bf282387ddb69cb12
  getJobsForSeeker(seekid:string){
    return this.http.get<JobApplication[]>(this.url+"getJobs");
  }
  applyForJob(jobId:string,seekid:string){
    return this.http.get<boolean>(this.url+"applyForJob/"+jobId+"/"+seekid);
  }
}
