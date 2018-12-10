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
  private userUrl:string="http://localhost:8765/job-application";
=======
  private userUrl:string="http://localhost:8765/seeker-service";
>>>>>>> 3f8b144709fb1821a844286bacbf01fc7f3c3513

  public postJobApplication(JobApplication){
    return this.http.post<JobApplication>(this.userUrl+"/employer/postjobs/job", JobApplication)
  }
  public getJob(jobId:string){
    return this.http.get<JobApplication>(this.userUrl+"/employer/getjob/"+jobId);

  }
  public getJobApplications(id:string){
    return this.http.get<JobApplication[]>(this.userUrl+"/employer/seejobs/"+id);
  }
  public deleteJobApplication(jobId:string){
    return this.http.delete(this.userUrl+"/employer/deleteJobApplication/"+jobId);
  }
}
