import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import  { LoginSignupService } from '../services/login-signup.service';
import { SubscriptionFeeDetails } from '../services/subscription-fee-details';
@Component({
  selector: 'eml-subscription-fee',
  templateUrl: './subscription-fee.component.html',
  styleUrls: ['./subscription-fee.component.css']
})
export class SubscriptionFeeComponent implements OnInit {

  subscriptionFeeForm:FormGroup;
  submitted=false;
  subscriptionFeeDetailObj : SubscriptionFeeDetails=new SubscriptionFeeDetails(); 
  subscriptionFeeDetailObjNew : SubscriptionFeeDetails[]; 
  constructor(private formBuilder: FormBuilder,private router: Router, private service : LoginSignupService) { }

  ngOnInit() {
    this.subscriptionFeeForm = this.formBuilder.group({
      bankName: ['', [Validators.required,Validators.pattern("[A-Z][a-z]{0,}")]],
      cardName: ['', [Validators.required,Validators.pattern("[A-Z][a-z]{0,}")]],            
      fee:['1',Validators.required],
      cardNo:['',[Validators.required,Validators.pattern("[1-9]{1}[0-9]{7}")]],
      terms:['',Validators.required]
  });
}

onSubmit(obj) {
    this.submitted=true;
    this.subscriptionFeeDetailObj.bankName=obj.bankName;
    this.subscriptionFeeDetailObj.cardName=obj.cardName;
    this.subscriptionFeeDetailObj.fee=obj.fee;
    this.subscriptionFeeDetailObj.cardNo=obj.cardNo;   
  // stop here if form is invalid
  if (this.subscriptionFeeForm.invalid) {
      return;
  }
  
    this.service.addFeeDetails(this.subscriptionFeeDetailObj).subscribe( data =>{
        this.subscriptionFeeDetailObjNew=data;
       if(this.subscriptionFeeDetailObjNew==null)
       alert("please do again");
       else
       {
        alert("Payment done SuccessFully.");
    }
    });

}



get f() { return this.subscriptionFeeForm['controls']; }
}
