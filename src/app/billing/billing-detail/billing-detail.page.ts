import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { GeneralService } from "../../general.service";

@Component({
  selector: 'app-billing-detail',
  templateUrl: 'billing-detail.page.html',
  styleUrls: ['billing-detail.page.scss']
})
export class BillingDetailPage {
  formBilling: FormGroup;
  isLoading: boolean;
  statusList = [
    {
      value: 'complete',
      text: 'Complete'
    },
    {
      value: 'incomplete',
      text: 'Incomplete'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private generalService: GeneralService,
    private location: Location
  ) {

  }
  
  ngOnInit() {
   
  }

  back(){
    let url = localStorage.getItem("billingList")
    this.router.navigateByUrl(url)
  }
}
