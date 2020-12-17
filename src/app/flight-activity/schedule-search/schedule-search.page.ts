import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { GeneralService } from "../../general.service";

@Component({
  selector: 'app-schedule-search',
  templateUrl: 'schedule-search.page.html',
  styleUrls: ['schedule-search.page.scss']
})
export class ScheduleSearchPage {
  formSchedule: FormGroup;
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
    this.formSchedule = this.formBuilder.group({
      startDate: moment().format(),
      endDate: moment().format(),
      flightNumber: '',
      status: ''
    })

    this.isLoading = false;
  }

  onSubmit(e) {
    const formValue = this.formSchedule.value;

    let urlNext = "/flight/flight-list"
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
    this.router.navigateByUrl(urlNext)
  }

}
