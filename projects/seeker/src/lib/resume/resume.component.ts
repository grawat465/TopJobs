import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


import { EducationdetailsformComponent } from '../forms/educationdetailsform/educationdetailsform.component';
import { ExperiencedetailsformComponent } from '../forms/experiencedetailsform/experiencedetailsform.component';
import { BasicinfoComponent } from '../forms/basicinfo/basicinfo.component';
<<<<<<< HEAD
import { Resume } from 'projects/employeer/src/lib/models/resume';
import { SeekerService } from '../service/seeker.service';
import { ActivatedRoute } from '@angular/router';
=======
>>>>>>> 0ca03663acad74eff545bb3bf282387ddb69cb12

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
<<<<<<< HEAD
  data:Resume;
  seekid:string;
=======

>>>>>>> 0ca03663acad74eff545bb3bf282387ddb69cb12
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

<<<<<<< HEAD
  constructor(private _formBuilder: FormBuilder, private service: SeekerService, private route:ActivatedRoute) {
=======
  constructor(private _formBuilder: FormBuilder) {
>>>>>>> 0ca03663acad74eff545bb3bf282387ddb69cb12



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
<<<<<<< HEAD
   this.seekid= this.route.snapshot.paramMap.get('seekid');
    this.service.getResumeData(this.seekid).subscribe(data=>{this.data=data});
=======

>>>>>>> 0ca03663acad74eff545bb3bf282387ddb69cb12
  }



}
