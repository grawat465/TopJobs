import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Education } from '../models/education';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4201', // -->Add this line
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': '*',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class EducationService {
  //private  API_URL = 'http://192.168.252.33:8765/seeker-service/';

  private API_URL = 'http://localhost:9990/';

  dataChange: BehaviorSubject<Education[]> = new BehaviorSubject<Education[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor(private httpClient: HttpClient) { }

  get data(): Education[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }



  getAllData(): void {
    this.httpClient.get<Education[]>(this.API_URL + 'education/RID123').subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
  }

  /** CRUD METHODS

  addIssue(data: Issue): void {
    this.dialogData = data;
  }

  updateIssue(data: Issue): void {
    this.dialogData = data;
  }

  deleteIssue(id: number): void {
    console.log(id);
  }

  */


  // ADD, POST METHOD
  addData(data): void {
    this.httpClient.post(this.API_URL + 'education', data).subscribe(stream => {
      this.dialogData = stream;
    });
  }

  // UPDATE, PUT METHOD
  updateData(data: Education): void {
    this.httpClient.put(this.API_URL + data.id, data).subscribe(shizzz => {
      this.dialogData = shizzz;
    });
  }

  // DELETE METHOD
  deleteData(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
    });
  }
}