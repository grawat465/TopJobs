import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


import { EducationdetailsformComponent } from '../forms/educationdetailsform/educationdetailsform.component';
import { ExperiencedetailsformComponent } from '../forms/experiencedetailsform/experiencedetailsform.component';
import { BasicinfoComponent } from '../forms/basicinfo/basicinfo.component';

@Component({
  selector: 'sek-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
// Stepper control
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  isOptional: boolean = false;

  @ViewChild('BasicInfoComponent') basicInfoComponent: BasicinfoComponent;
  @ViewChild('EducationDetailsformComponent') educationDetailsformComponent: EducationdetailsformComponent;
  @ViewChild('ExperienceDetailsformComponent') experienceDetailsformComponent: ExperiencedetailsformComponent;

  get frmStepOne() {
    return this.basicInfoComponent ? this.basicInfoComponent.firstFormGroup : null;
  }

  get frmStepTwo() {
    return this.educationDetailsformComponent ? this.educationDetailsformComponent.secondFormGroup : null;
  }

  get frmStepThree() {
    return this.experienceDetailsformComponent ? this.experienceDetailsformComponent.thirdFormGroup : null;
  }

  constructor(private _formBuilder: FormBuilder) {



  }



  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });

  }



}
