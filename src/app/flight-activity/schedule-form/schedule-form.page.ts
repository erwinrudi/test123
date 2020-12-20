import { Component } from '@angular/core';
import { GeneralService } from "../../general.service";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import * as moment from "moment";
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlightActivityService } from './../flight-activity.service';

@Component({
  selector: 'app-schedule-form',
  templateUrl: 'schedule-form.page.html',
  styleUrls: ['schedule-form.page.scss']
})
export class ScheduleFormPage {
  formSchedule: FormGroup;
  isLoading: boolean;

  formType = 0;

  terminalList = [
    {
      value: 'terminal3c',
      text: 'Terminal 3c'
    },
    {
      value: 'terminal3a',
      text: 'Terminal 3A'
    },
  ];

  locationList = [
    {
      value: 'indo-cgk',
      text: 'Indonesia - CGK'
    },
    {
      value: 'sin-sin',
      text: 'Singapure - SIN'
    },
  ];

  regList = [
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
    this.formSchedule = this.formBuilder.group({
      terminal_ar: '',
      from_ar: '',
      to_ar: '',
      eta_ar: '',
      ata_ar: '',
      regNo_ar: '',
      remark_ar: '',

      terminal_der: '',
      from_der: '',
      to_der: '',
      eta_der: '',
      ata_der: '',
      regNo_der: '',
      remark_der: ''
    })

    this.getData();
  }

  getData() {
    let data = null
    data = localStorage.getItem('flightInfo')
    data = JSON.parse(data)
    this.formSchedule.patchValue({
      terminal_ar: data.arrival.terminal,
      from_ar: data.arrival.from,
      to_ar: data.arrival.to,
      eta_ar: data.arrival.eta,
      ata_ar: data.arrival.ata,
      regNo_ar: data.arrival.reg,
      remark_ar: data.arrival.remarkNote,

      terminal_der: data.departure.terminal,
      from_der: data.departure.from,
      to_der: data.departure.to,
      eta_der: data.departure.eta,
      ata_der: data.departure.ata,
      regNo_der: data.departure.reg,
      remark_der: data.departure.remarkNote,
    })
  }

  onSubmit(e) {
    const formValue = this.formSchedule.value;
    let flightInfo = null
    flightInfo = JSON.parse(localStorage.getItem('flightInfo'))
    let eta_ar = moment(formValue.eta_ar, "YYYY-MM-DDTHH:mmZ").format("YYYY-MM-DD hh:mm:ss")
    let ata_ar = moment(formValue.ata_ar, "YYYY-MM-DDTHH:mmZ").format("YYYY-MM-DD hh:mm:ss")
    let eta_der = moment(formValue.eta_der, "YYYY-MM-DDTHH:mmZ").format("YYYY-MM-DD hh:mm:ss")
    let ata_der = moment(formValue.ata_der, "YYYY-MM-DDTHH:mmZ").format("YYYY-MM-DD hh:mm:ss")
    
    let body = {
      "ARRIVAL":
      {
        "IATA_AIRLINE_CODE": flightInfo.detailTemp.arrival.IATA_AIRLINE_CODE,
        "SUFFIX": flightInfo.detailTemp.arrival.SUFFIX,
        "LEG": flightInfo.detailTemp.arrival.LEG,
        "TERMINAL_ID": formValue.terminal_ar,
        "STATION1": formValue.from_ar,
        "STATION2": formValue.to_ar,
        "STATION3": flightInfo.detailTemp.arrival.STATION3,
        "STATION4": flightInfo.detailTemp.arrival.STATION4,
        "ATMSATAD": ata_ar,
        "REMARK_CODE": flightInfo.detailTemp.arrival.REMARK_CODE,
        "AIRCRAFT_SUBTYPE": flightInfo.detailTemp.arrival.AIRCRAFT_SUBTYPE,
        "NOTE_DELAY": flightInfo.detailTemp.arrival.NOTE_DELAY,
        "FLIGHT_NUMBER": flightInfo.detailTemp.arrival.FLIGHT_NO,
        "AIRCRAFT_REG_NO": formValue.regNo_ar,
        "CATEGORY_CODE": flightInfo.detailTemp.arrival.CATEGORY_CODE,
        "STAD": flightInfo.detailTemp.arrival.STAD,
        "AIRETAD": eta_ar,
        "RUNWAY": flightInfo.detailTemp.arrival.RUNWAY,
        "REMARK_NOTE": formValue.remark_ar,
      },
      "DEPARTURE": {
        "IATA_AIRLINE_CODE": flightInfo.detailTemp.departure.IATA_AIRLINE_CODE,
        "SUFFIX": flightInfo.detailTemp.departure.SUFFIX,
        "LEG": flightInfo.detailTemp.departure.LEG,
        "TERMINAL_ID": formValue.terminal_der,
        "STATION1": formValue.from_der,
        "STATION2": formValue.to_der,
        "STATION3": flightInfo.detailTemp.departure.STATION3,
        "STATION4": flightInfo.detailTemp.departure.STATION4,
        "ATMSATAD": ata_der,
        "REMARK_CODE": flightInfo.detailTemp.departure.REMARK_CODE,
        "AIRCRAFT_SUBTYPE": flightInfo.detailTemp.departure.AIRCRAFT_SUBTYPE,
        "NOTE_DELAY": flightInfo.detailTemp.departure.NOTE_DELAY,
        "FLIGHT_NUMBER": flightInfo.detailTemp.departure.FLIGHT_NO,
        "AIRCRAFT_REG_NO": formValue.regNo_der,
        "CATEGORY_CODE": flightInfo.detailTemp.departure.CATEGORY_CODE,
        "STAD": flightInfo.detailTemp.departure.STAD,
        "AIRETAD": eta_der,
        "RUNWAY": flightInfo.detailTemp.departure.RUNWAY,
        "REMARK_NOTE": formValue.remark_der,
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
