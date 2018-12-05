import { Component, OnInit } from '@angular/core';
import { JobApplication } from '../models/job-application';
import { FormBuilder, Validators } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { JobApplicationService } from '../services/job-application.service';
<<<<<<< HEAD
import { MatSnackBar } from '@angular/material';
=======
>>>>>>> 0ca03663acad74eff545bb3bf282387ddb69cb12


@Component({
  selector: 'emp-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.css']
})
export class NewJobComponent implements OnInit {

  empId: String;

  job: JobApplication = new JobApplication();
<<<<<<< HEAD
  constructor(private FB: FormBuilder, private router: Router, private service: JobApplicationService, private route: ActivatedRoute, private snackBar : MatSnackBar) { }
=======
  constructor(private FB: FormBuilder, private router: Router, private service: JobApplicationService, private route: ActivatedRoute) { }
>>>>>>> 0ca03663acad74eff545bb3bf282387ddb69cb12


  submitted = false;

  Locations =

    ["Alabama", 'Alaska', 'Arizona', 'Arkansas', 'India'];



  validation_messages = {
    'companyname': [
      { type: 'pattern', message: 'No special characters are allowed' },
      { type: 'required', message: 'Full name is required' }
    ],
    'desc': [
      { type: 'maxlength', message: 'Bio cannot be more than 256 characters long' },
    ],
    'location': [
      { type: 'required', message: 'Please select location' },
    ],

    'position':
      [
        { type: 'required', message: 'Please select position' },
      ],

    'vaccancy': [
      { type: 'required', message: 'Please enter vaccancy' },
    ],
  };


  newJobForm = this.FB.group({
    companyname: ['', [Validators.required, Validators.pattern("")]],
    desc: ['Leader in IT industry', Validators.maxLength(256)],
    location: ['', Validators.required],
    position: ['', Validators.required],
    vaccancy: ['', Validators.required]

  });

  ngOnInit() {
    this.empId = this.route.snapshot.paramMap.get('empId');
  }



  onSubmit(obj) {
    console.log(obj);

    this.submitted = true;
    this.job.jobDescription = obj.position;
    this.job.noOfOpenings = obj.vaccancy;
    this.job.jobProfile = obj.desc;
    this.job.location = obj.location;
    this.job.companyName = obj.companyname;
    this.job.empId=this.empId;

    if (this.newJobForm.invalid) {
      console.log("Invalid Job");
      return;
    }
    this.service.postJobApplication(this.job).subscribe(data => {
      console.log(data);
<<<<<<< HEAD
      //alert("Job posted SuccessFully.");
      this.snackBar.open('Job Posted SuccessFully.','View',{duration:3000,horizontalPosition:"right",verticalPosition:"top"});
=======
      alert("Job posted SuccessFully.");
>>>>>>> 0ca03663acad74eff545bb3bf282387ddb69cb12
      this.router.navigate(['/employer/jobs',this.empId]);
    });
  }

}
