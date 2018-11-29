import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sek-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicinfoComponent implements OnInit {
  firstFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
   
  }

}
