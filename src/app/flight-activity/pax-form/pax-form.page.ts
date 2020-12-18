import { Component } from '@angular/core';
import { GeneralService } from "../../general.service";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import * as moment from "moment";
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlightActivityService } from './../flight-activity.service';

@Component({
  selector: 'app-pax-form',
  templateUrl: 'pax-form.page.html',
  styleUrls: ['pax-form.page.scss']
})
export class PaxFormPage {
  formPax: FormGroup;
  isLoading: boolean;
  pageType: string;
  id = null;
  formType = 0;
  afskey = {
    arrival: '',
    derparture: ''
  }
  constructor(
    private formBuilder: FormBuilder,
    private generalService: GeneralService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router,
    private flightActivityService: FlightActivityService
  ) {

  }
  ngOnInit() {
    this.formPax = this.formBuilder.group({
      adult_ar: '',
      child_ar: '',
      infant_ar: '',
      transit_ar: '',
      transfer_ar: '',
      ctew_ar: '',
      exCrew_ar: '',
      divert_ar: '',
      missed_ar: '',
      counter_ar: '',

      adult_der: '',
      child_der: '',
      infant_der: '',
      transit_der: '',
      transfer_der: '',
      ctew_der: '',
      exCrew_der: '',
      divert_der: '',
      missed_der: '',
      counter_der: ''
    })
    let flightInfo = null
    flightInfo = localStorage.getItem('flightInfo')
    flightInfo = JSON.parse(flightInfo)
    this.afskey.arrival = flightInfo.arrival.afskey
    this.afskey.derparture = flightInfo.departure.afskey
    this.id = this.activatedRoute.snapshot.params["id"];

    if (this.id) {
      this.pageType = "edit";
      this.getDetail()
    } else {
      this.pageType = "new";
    }

    this.isLoading = false;
  }

  getDetail() {
    let pax = null
    pax = localStorage.getItem('pax')
    pax = JSON.parse(pax)
    if (this.id == pax.id) {
      let arrival = pax.arrival
      let departure = pax.departure
      this.formPax.patchValue({
        adult_ar: arrival.adult,
        child_ar: arrival.child,
        infant_ar: arrival.infant,
        transit_ar: arrival.transit,
        transfer_ar: arrival.transfer,
        ctew_ar: arrival.ctew,
        exCrew_ar: arrival.exCrew,
        divert_ar: arrival.divert,
        missed_ar: arrival.missed,
        counter_ar: arrival.counter,

        adult_der: departure.adult,
        child_der: departure.child,
        infant_der: departure.infant,
        transit_der: departure.transit,
        transfer_der: departure.transfer,
        ctew_der: departure.ctew,
        exCrew_der: departure.exCrew,
        divert_der: departure.divert,
        missed_der: departure.missed,
        counter_der: departure.counter,
      })
    }
  }

  onSubmit(e) {
    const formValue = this.formPax.value;

    let body = {
      "ARRIVAL": {
        "AFSKEY":  this.afskey.arrival,
        "ADULT": formValue.adult_ar,
        "CHILD":  formValue.child_ar,
        "INFANT":  formValue.infant_ar,
        "TRANSIT":  formValue.transit_ar,
        "TRANSFER":  formValue.transfer_ar,
        "CREW": formValue.ctew_ar,
        "EXTRA_CREW": formValue.exCrew_ar,
        "DIVERT":  formValue.divert_ar,
        "MISSED":  formValue.missed_ar,
      },
      "DEPARTURE": {
        "AFSKEY": this.afskey.derparture,
        "ADULT": formValue.adult_der,
        "CHILD":  formValue.child_der,
        "INFANT":  formValue.infant_der,
        "TRANSIT":  formValue.transit_der,
        "TRANSFER":  formValue.transfer_der,
        "CREW": formValue.ctew_der,
        "EXTRA_CREW": formValue.exCrew_der,
        "DIVERT":  formValue.divert_der,
        "MISSED":  formValue.missed_der,
      }
    }

    this.flightActivityService.submitPax(body).subscribe((res: any) => {
      this.generalService.notification("SUKSES")
      this.generalService.goBack();
    },
      error => {
        if (error.response) {
          this.generalService.notification(error.response.message)
        }
        else {
          this.generalService.notification("ERROR CONNECTION")
        }
      }
    );
  }

  onChangeType(type) {
    this.formType = type
  }


}
