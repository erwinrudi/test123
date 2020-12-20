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
      value: 'D',
      text: 'Dometic'
    },
    {
      value: 'I',
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
      this.runawayList = []
      this.remarkList = []
      data.MASTER_REMARK.map(x => {
        let optionVal = {
          remarkCode: x.REMARK_CODE,
          remark: x.REMARK,
          text: x.REMARK,
        }
        this.remarkList.push(optionVal)
      })

      data.MASTER_RUNAWAY.map(x => {
        let optionVal = {
          runwayCode: x.RUNWAY_CODE,
          runway: x.RUNWAY_NAME,
          text: x.RUNWAY_NAME,
        }
        this.runawayList.push(optionVal)
      })

      data.MASTER_SERVICE_TYPE.map(x => {
        let optionVal = x
        x['text'] = x.DESCRIPTION
        this.serviceTypeList.push(optionVal)
      })

      data.MASTER_SUFFIX.map(x => {
        let optionVal = {
          suffixId: x.SUFFIX_ID,
          suffixName: x.SUFFIX_NAME,
          text: x.SUFFIX_NAME,
        }
        this.suffixList.push(optionVal)
      })

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
    let flightDate_arDate = moment(formValue.flightDate_ar, "YYYY-MM-DDTHH:mmZ").format("YYYY-MM-DD")
    let flightDate_arTime = moment(formValue.flightDate_ar, "YYYY-MM-DDTHH:mmZ").format("hh:mm:ss")
    let flightDate_ar = flightDate_arDate + " " + flightDate_arTime

    let flightDate_derDate = moment(formValue.flightDate_der, "YYYY-MM-DDTHH:mmZ").format("YYYY-MM-DD")
    let flightDate_derTime = moment(formValue.flightDate_der, "YYYY-MM-DDTHH:mmZ").format("hh:mm:ss")
    let flightDate_der = flightDate_derDate + " " + flightDate_derTime
    
    let body = {
      "ARRIVAL":
      {
        "IATA_AIRLINE_CODE": formValue.airline_ar,
        "SUFFIX": formValue.suffix_ar.suffixId,
        "LEG": "",
        "TERMINAL_ID": formValue.terminal_ar,
        "STATION1": formValue.station1_ar,
        "STATION2": formValue.station2_ar,
        "STATION3": "",
        "STATION4": "",
        "ATMSATAD": "",
        "REMARK_CODE": "",
        "AIRCRAFT_SUBTYPE": "",
        "NOTE_DELAY": "",
        "FLIGHT_NUMBER": formValue.no_ar,
        "AIRCRAFT_REG_NO": formValue.registrationNumber_ar,
        "CATEGORY_CODE": formValue.flightType_ar.value,
        "STAD": flightDate_ar,
        "AIRETAD": "",
        "RUNWAY": "",
        "REMARK_NOTE": ""
      },
      "DEPARTURE": {
        "IATA_AIRLINE_CODE": formValue.airline_ar,
        "SUFFIX": formValue.suffix_der.suffixId,
        "LEG": "",
        "TERMINAL_ID": formValue.terminal_der,
        "STATION1": formValue.station1_der,
        "STATION2": formValue.station2_der,
        "STATION3": "",
        "STATION4": "",
        "ATMSATAD": "",
        "REMARK_CODE": "",
        "AIRCRAFT_SUBTYPE": "",
        "NOTE_DELAY": "",
        "FLIGHT_NUMBER": formValue.no_der,
        "AIRCRAFT_REG_NO": formValue.registrationNumber_der,
        "CATEGORY_CODE": formValue.flightType_der.value,
        "STAD": flightDate_der,
        "AIRETAD": "",
        "RUNWAY": "",
        "REMARK_NOTE": ""
      }
    }

    this.flightActivityService.submitAirline(body).subscribe((res: any) => {
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
