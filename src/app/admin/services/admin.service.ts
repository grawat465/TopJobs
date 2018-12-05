import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient} from '@angular/common/http';
import { Admin } from '../admin';
import { JobApplication } from 'projects/employeer/src/lib/models/job-application';
import { Employer } from 'src/app/models/employer';


const httpOptions={
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200', // -->Add this line
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
  })
  }

  @Injectable({
    providedIn: 'root'
  })
  export class AdminService {
    userUrl = 'http://localhost:8765/employee-registration/';
  
    constructor(private http : HttpClient) { }
  
    /**
     * name
     */
    public name() {
      
    }
  
  
public requestLogin(email,password) {

    return this.http.get<boolean>(this.userUrl+"/admin/login/"+email+"/"+password);
  }

  getAllJobs(){
    return null;
  }

  deleteJob(id:string){
    return null;
  }

  getAllEmployersDetails(){
    return this.http.get<Employer[]>(this.userUrl+"employer/getAll");
    //return null;
  }
}
 
  
  