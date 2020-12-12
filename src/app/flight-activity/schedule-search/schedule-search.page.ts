import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: 'app-schedule-search',
  templateUrl: 'schedule-search.page.html',
  styleUrls: ['schedule-search.page.scss']
})
export class ScheduleSearchPage {
  formSchedule: FormGroup;
  isLoading: boolean;

  statusList= [
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
    private formBuilder: FormBuilder
  ) {

  }
  ngOnInit() {
    this.formSchedule = this.formBuilder.group({
      startDate: moment().format("YYYY-MM-DDTHH:mm:ss.SSS"),
      endDate: moment().format("YYYY-MM-DDTHH:mm:ss.SSS"),
      flightNumber: '',
      status: ''
    })

    this.isLoading = false;
  }

  onSubmit(e) {

  }

}
