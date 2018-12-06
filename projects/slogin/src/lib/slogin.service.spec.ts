import { TestBed } from '@angular/core/testing';

import { SloginService } from './slogin.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Seeker } from './models/seeker';
//import { SubscriptionFeeDetails } from './subscription-fee-details';


describe('SloginService', () => {
  let service:SloginService;
  let httpMock:HttpTestingController; 
  
  beforeEach(() => {TestBed.configureTestingModule({
    providers:[SloginService],
    imports:[HttpClientTestingModule]
  }),
  service=TestBed.get(SloginService);
  httpMock=TestBed.get(HttpTestingController);
});
afterEach(()=>{
  httpMock.verify();
});

  it('should be created', () => {
    const service: SloginService = TestBed.get(SloginService);
    expect(service).toBeTruthy();
  });

  it('should retreive SignupDetails from the API via POST',()=>{
    const dummyPosts: Seeker[]=[{
      firstName:"Bhanu",
      lastName:"Khandelwal",
      gender:"male",
      country:"India",
      emailId:"bhanu@9k@gmail.com",
      password:"Bhanu@123",
      dob:new Date('1995-10-29'),
      address:"Main Market",
      mobileno:"1234567890",
      bio:"hello",
      city:"noida",
      zipcode:"123456",
      states:"up",
      username:"bhanu29k"
    }]; 
    service.signUpUser(dummyPosts).subscribe(posts =>{
   // expect(posts.length).toBe(1);
    expect(posts).toEqual(dummyPosts);
    });
    const request=httpMock.expectOne(`${service.userUrl}/seeker/signup/emp`);
    expect(request.request.method).toBe('POST');
    request.flush(dummyPosts);
    });
  
});
