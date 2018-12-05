import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobApplication } from '../models/job-application';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {

  constructor(private http : HttpClient) { }

  //private userUrl = '/job-application';
<<<<<<< HEAD
  private userUrl:string="http://localhost:8765/seeker-service";
=======
  private userUrl:string="http://localhost:8765/job-application";
>>>>>>> 5e4c10673dfe32401beac126aa2144b75481cdd1

  public postJobApplication(JobApplication){
    console.log("POSTING JOB");
    return this.http.post<JobApplication>(this.userUrl+"/employer/postjobs/job", JobApplication)
  }
  public getJobApplication(id:string){

    return this.http.get<JobApplication[]>(this.userUrl+"/employer/seejobs/"+id)
  }
  public deleteJobApplication(jobId:string){
    return this.http.delete(this.userUrl+"/employer/deleteJobApplication/"+jobId);
  }
}
