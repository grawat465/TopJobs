import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SeekerService } from '../../service/seeker.service';
import { Resume } from '../../models/resume';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sek-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicinfoComponent implements OnInit {
  firstFormGroup: FormGroup;
  isDisabled = true;
  genders =['Male','Female','Other'];
  details:Resume;
  seekerid:string;
  resumeid:string;

  constructor(private route:ActivatedRoute, private _formBuilder: FormBuilder, private service: SeekerService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]

     
    });
    this.seekerid=this.route.snapshot.paramMap.get('seekid');
    
   this.userDetailsForm.disable(); // disable form onload

    this.service.getResumeData(this.seekerid).subscribe(data => {
       //this.details = data;
       this.userDetailsForm.patchValue({firstname : data.name,
                                        phone : data.contact,
                                        birthday : data.dob,
                                        gender : data.gender,
                                        email : data.email,})
    });
  


  }

  userDetailsForm = this._formBuilder.group({
    firstname: ['',  [Validators.required, Validators.pattern('^([a-z]|[A-Z]){4,8}$')] ],
    birthday: ['', Validators.required],
    gender: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [  Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]]
  });
 
  toggle() {
    const control = this.userDetailsForm;
   if (control.disabled) {
     control.enable();
   } else {
     control.disable();
   }
  }
 
 
}
