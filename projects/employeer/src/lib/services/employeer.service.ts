import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resume } from '../models/resume';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
//import { Observable } from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class EmployeerService {

  
  private userUrl = 'http://192.168.252.33:8765/job-application';
  //private userUrl:string="/seeker-service";
  constructor(private snackBar: MatSnackBar,private http:HttpClient) { }

    getResumeListForJob(empId:String,jobId:String){
      return this.http.get<Resume[]>(this.userUrl+"/employer/seejobs/getresume/"+jobId).pipe(map(res=>res)),catchError((err)=>{
        this.snackBar.open('Error while fetching Resume.','NOT FOUND',{duration:3000});
        return Observable.throw(err);
      });
    }
}
