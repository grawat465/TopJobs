import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sek-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicinfoComponent implements OnInit {
  firstFormGroup: FormGroup;
  isDisabled = true;
  genders =['Male','Female','Other'];


  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]

     
    });
    this.firstFormGroup.disable();
  }

  userDetailsForm = this._formBuilder.group({
    firstname: ['', [Validators.required, Validators.pattern('^([a-z]|[A-Z]){4,8}$')] ],
    birthday: ['', Validators.required],
    gender: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [  Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]]
  });
 
  toggle() {
    this.isDisabled = !this.isDisabled;

    this.userDetailsForm.controls.stuff[this.isDisabled ? 'enable' : 'disable']();
  }
}
