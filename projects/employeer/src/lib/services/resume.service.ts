import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resume } from '../models/resume';
import { ShortlistApplicants } from '../models/ShortlistApplicants';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private userUrl = 'http://192.168.252.33:8765/job-application';
  //private userUrl:string="/seeker-service";
  constructor(private snackBar:MatSnackBar,private http:HttpClient) { }

    getResumeListForJob(empId:string,jobId:string){
      return this.http.get<Resume[]>(this.userUrl+"/employer/seejobs/getresume/"+jobId);
    }

    sendShortlist(seekId:string,jobId:string,empId:string){
      console.log("sending shortlist");
      return this.http.get<ShortlistApplicants>(this.userUrl+"/employer/addShortlist/"+seekId+"/"+jobId+"/"+empId);
    }

    getAllShortlsitedApplicants(){
      return this.http.get<ShortlistApplicants[]>(this.userUrl+"/employer/getShortlistApplicants");
    }

    deleteShortlistedApplicants(resumeId:string){
      return this.http.delete<boolean>(this.userUrl+"/employer/deleteShortlistApplicants/"+resumeId)
    }

    deleteResumeFromJobApplication(jobId:string,resumeId:string){
      return this.http.delete<boolean>(this.userUrl+"/employer/deleteResumeFromJobApplication/"+jobId+"/"+resumeId)
    }
}
