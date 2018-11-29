import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SeekerService } from '../../service/seeker.service';
import { Resume } from '../../models/resume';

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
  

  constructor(private _formBuilder: FormBuilder, private service: SeekerService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]

     
    });
    
   
    this.service.getResumeData()
    .subscribe(data => {
       this.details = data;
       this.userDetailsForm.patchValue({firstname : this.details.name,
                                        phone : this.details.contact,
                                        birthday : this.details.dob,
                                        gender : this.details.gender,
                                        gmail : this.details.email,})
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
