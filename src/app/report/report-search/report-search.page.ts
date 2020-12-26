import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { GeneralService } from "../../general.service";

@Component({
  selector: 'app-report-search',
  templateUrl: 'report-search.page.html',
  styleUrls: ['report-search.page.scss']
})
export class ReportSearchPage {
  formReport: FormGroup;
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
    this.formReport = this.formBuilder.group({
      startDate: '',
      endDate: '',
      flightNumber: '',
      status: ''
    })

    this.isLoading = false;
  }

  onSubmit(e) {
    const formValue = this.formReport.value;

    let urlNext = "/billing/billing-list"
    let nullParam = true
    if (formValue.startDate != "") {
      urlNext = urlNext + "?startDate=" + formValue.startDate
      nullParam = false
    }
    if (formValue.endDate != "") {
      if (nullParam == true) {
        urlNext = urlNext + "?endDate=" + formValue.endDate
        nullParam = false
      }
      else {
        urlNext = urlNext + "&endDate=" + formValue.endDate
      }
    }
    if (formValue.flightNumber != "") {
      if (nullParam == true) {
        urlNext = urlNext + "?flightNumber=" + formValue.flightNumber
        nullParam = false
      }
      else {
        urlNext = urlNext + "&flightNumber=" + formValue.flightNumber
      }
    }
    if (formValue.status != "") {
      if (nullParam == true) {
        urlNext = urlNext + "?status=" + formValue.status.value
        nullParam = false
      }
      else {
        urlNext = urlNext + "&status=" + formValue.status.value
      }
    }
    // urlNext = encodeURI(urlNext)
    localStorage.setItem("billingList", urlNext)
    this.router.navigateByUrl(urlNext)
  }

  back(){
    this.router.navigateByUrl("/billing/billing-menu")
  }
}
