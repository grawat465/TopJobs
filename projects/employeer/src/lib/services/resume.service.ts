import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resume } from '../models/resume';
import { JobApplication } from '../models/job-application';
import { ShortlistApplicants } from '../models/ShortlistApplicants';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private userUrl = 'http://localhost:8765/job-application';

  constructor(private http:HttpClient) { }

    getResumeListForJob(empId:string,jobId:string){
      return this.http.get<Resume[]>(this.userUrl+"/employer/seejobs/getresume/"+jobId);
    }
    sendShortlist(seekId:string,jobId:string,empId:string){
      return this.http.get<ShortlistApplicants>(this.userUrl+"/employer/addShortlist/"+seekId+"/"+jobId+"/"+empId);
    }
    getAllShortlsitedApplicants(){
      return this.http.get<ShortlistApplicants[]>(this.userUrl+"/employer/getShortlistApplicants");
    }
}
