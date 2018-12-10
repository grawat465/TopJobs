import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resume } from '../models/resume';
import { EducationDetails } from '../models/EducationDetails';
import { ExperienceDetails } from '../models/ExperienceDetails';

@Injectable({
  providedIn: 'root'
})
export class SeekerServiceService {
  getAlldata(): any {
    throw new Error("Method not implemented.");
  }
  //private url:string="http://localhost:8765/seeker-service";
  private url:string="http://192.168.252.33:8765/seeker-service";
  dataChange: any;
  data: any;
  constructor(private http:HttpClient) { }
  getResumeDetails(resumeId:string){
    return this.http.get<Resume>(this.url+"/resume/"+resumeId);
  }
  getEduDetails(resumeId:string){
    return this.http.get<EducationDetails[]>(this.url+"/education/"+resumeId);
  }
  getExpDetails(resumeId:string){
    return this.http.get<ExperienceDetails[]>(this.url+"/exp/"+resumeId);
  }
}
