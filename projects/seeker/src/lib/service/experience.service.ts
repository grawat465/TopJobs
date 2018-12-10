import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

   private API_URL = 'http://192.168.252.33:8765/seeker-service/';
    constructor(private http: HttpClient){ }
      
    getUsers(resumeid:string) {

        return this.http.get(this.API_URL + 'exp'+'/'+resumeid);
    }

    createUser(experience: Experience) {

        return this.http.post(this.API_URL + 'exp', experience);
    }
    updateUser(experience: Experience) {

        return this.http.put(this.API_URL + 'exp', experience);
    }
    deleteUser(id: number) {

        return this.http.delete(this.API_URL + 'exp/' + id);
    }
}
