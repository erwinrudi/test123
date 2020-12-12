import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-create-flight-ad',
  templateUrl: 'create-flight-ad.page.html',
  styleUrls: ['create-flight-ad.page.scss']
})
export class CreateFlightAdPage {
  formFlight: FormGroup;
  isLoading: boolean;

  formType= 0;

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
  ]

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
  ]

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {

  }
  ngOnInit() {
    this.formFlight = this.formBuilder.group({
      no_ar: '',
      airline_ar: '',
      suffix_ar: '',
      registrationNumber_ar: '',
      flightType_ar: '',
      terminal_ar: '',
      flightDate_ar: '',
      flightTime_ar: '',
      station1_ar: '',
      station2_ar: '',

      no_der: '',
      suffix_der: '',
      registrationNumber_der: '',
      flightType_der: '',
      terminal_der: '',
      flightDate_der: '',
      flightTime_der: '',
      station1_der: '',
      station2_der: ''
    })

    this.isLoading = false;
  }

  onSubmit(e) {

  }

  onChangeType(type){
    this.formType = type
  }


}
