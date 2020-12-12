import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: 'app-create-flight-single',
  templateUrl: 'create-flight-single.page.html',
  styleUrls: ['create-flight-single.page.scss']
})
export class CreateFlightSinglePage {
  formFlight: FormGroup;
  isLoading: boolean;

  airlineList = [
    {
      value: 'garuda',
      text: 'Garuda'
    },
    {
      value: 'city_link',
      text: 'City Link'
    },
    {
      value: 'lion_air',
      text: 'Lion Air'
    },
  ];

  flightTypeList = [
    {
      value: 'dometic',
      text: 'Dometic'
    },
    {
      value: 'international',
      text: 'International'
    },
  ];

  terminalList = [
    {
      value: '1',
      text: '1'
    },
    {
      value: '2',
      text: '2'
    },
    {
      value: '3',
      text: '3'
    },
    {
      value: '4',
      text: '4'
    },
    {
      value: '5',
      text: '5'
    }
  ];

  stationList = [
    {
      value: '1',
      text: '1'
    },
    {
      value: '2',
      text: '2'
    },
    {
      value: '3',
      text: '3'
    },
    {
      value: '4',
      text: '4'
    },
    {
      value: '5',
      text: '5'
    }
  ];

  flightCityList = [
    {
      value: 'jakarta',
      text: 'Jakarta'
    },
    {
      value: 'Bandung',
      text: 'Bandung'
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {

  }
  ngOnInit() {
    this.formFlight = this.formBuilder.group({
      no: '',
      airline: '',
      suffix: '',
      registrationNumber: '',
      flightType: '',
      terminal: '',
      flightDate: '',
      flightTime: '',
      station1: '',
      station2: '',
      flightCity: ''
    })

    this.isLoading = false;
  }

  onSubmit(e) {

  }
}
