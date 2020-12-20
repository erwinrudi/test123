import { Component } from '@angular/core';
import { GeneralService } from "../../general.service";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import * as moment from "moment";
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlightActivityService } from './../flight-activity.service';


@Component({
  selector: 'app-create-flight-ad',
  templateUrl: 'create-flight-ad.page.html',
  styleUrls: ['create-flight-ad.page.scss']
})
export class CreateFlightAdPage {
  formFlight: FormGroup;
  isLoading: boolean;

  formType = 0;

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

  suffixList = []
  remarkList = []
  runawayList = []
  serviceTypeList = []

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
    this.getData()
  }

  getData() {
    this.flightActivityService.getMasterAirline().subscribe((res: any) => {
      let data = res.data

      // data.
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

  onSubmit(e) {
    const formValue = this.formFlight.value;
    let body = {
      "ARRIVAL":
      {
        "IATA_AIRLINE_CODE": "CGK",
        "SUFFIX": "C",
        "LEG": "A",
        "TERMINAL_ID": "1",
        "STATION1": "CGK",
        "STATION2": "CGK",
        "STATION3": "CGK",
        "STATION4": "CGK",
        "ATMSATAD": "2020-12-12 00:00:00",
        "REMARK_CODE": "BCO",
        "AIRCRAFT_SUBTYPE": "H",
        "NOTE_DELAY": "DELAY",
        "FLIGHT_NUMBER": "01",
        "AIRCRAFT_REG_NO": "CGK-100",
        "CATEGORY_CODE": "D",
        "STAD": "2020-12-12 00:00:00",
        "AIRETAD": "2020-12-12 00:00:00",
        "RUNWAY": "07R",
        "REMARK_NOTE": "CMT"
      },
      "DEPARTURE": {
        "IATA_AIRLINE_CODE": "CGK",
        "SUFFIX": "C",
        "LEG": "D",
        "TERMINAL_ID": "1",
        "STATION1": "SIN",
        "STATION2": "SIN",
        "STATION3": "SIN",
        "STATION4": "SIN",
        "ATMSATAD": "2020-12-12 00:00:00",
        "REMARK_CODE": "BCO",
        "AIRCRAFT_SUBTYPE": "H",
        "NOTE_DELAY": "DELAY",
        "FLIGHT_NUMBER": "01",
        "AIRCRAFT_REG_NO": "CGK-100",
        "CATEGORY_CODE": "D",
        "STAD": "2020-12-12 00:00:00",
        "AIRETAD": "2020-12-12 00:00:00",
        "RUNWAY": "07R",
        "REMARK_NOTE": "CMT"
      }
    }
  }

  onChangeType(type) {
    this.formType = type
  }


}
