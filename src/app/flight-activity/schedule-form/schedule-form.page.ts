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

  suffixList = []
  remarkList = []
  runawayList = []
  serviceTypeList = []

  flightTypeList = [
    {
      value: 'D',
      text: 'Domestic'
    },
    {
      value: 'I',
      text: 'International'
    },
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
      flightType_ar: '',
      suffix_ar: '',
      runaway_ar: '',
      serviceType_ar: '',
      from_ar: '',
      to_ar: '',
      eta_ar: '',
      ata_ar: '',
      regNo_ar: '',
      remark_ar: '',
      remarkNote_ar: '',
      noteDelay_ar: '',

      terminal_der: '',
      flightType_der : '',
      from_der: '',
      suffix_der: '',
      runaway_der: '',
      serviceType_der: '',
      to_der: '',
      eta_der: '',
      ata_der: '',
      regNo_der: '',
      remark_der: '',
      remarkNote_der: '',
      noteDelay_der: '',
    })

    this.getData();
  }

  getData() {
    this.flightActivityService.getMasterAirline().subscribe((res: any) => {
      let data = res.data
      this.runawayList = []
      this.remarkList = []
      this.serviceTypeList = []
      this.suffixList = []

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
        x['text'] = x.SUBTYPE_INVO + " - " + x.DESCRIPTION
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

      data = null
      data = localStorage.getItem('flightInfo')
      data = JSON.parse(data)

      let remarkTemp_ar = this.remarkList.find(x => x.remarkCode == data.detailTemp.arrival.REMARK_CODE)
      let remarkTemp_der = this.remarkList.find(x => x.remarkCode == data.detailTemp.departure.REMARK_CODE)

      let suffixTemp_ar = this.suffixList.find(x => x.suffixId == data.detailTemp.arrival.SUFFIX)
      let suffixTemp_der = this.suffixList.find(x => x.suffixId == data.detailTemp.departure.SUFFIX)

      let serviceTypeTemp_ar = this.serviceTypeList.find(x => x.AIRCRAFT_SUBTYPE == data.detailTemp.arrival.AIRCRAFT_SUBTYPE)
      let serviceTypeTemp_der = this.serviceTypeList.find(x => x.AIRCRAFT_SUBTYPE == data.detailTemp.departure.AIRCRAFT_SUBTYPE)
      
      
      let runawayTemp_ar = this.runawayList.find(x => x.runwayCode == data.detailTemp.arrival.RUNWAY)
      let runawayTemp_der = this.runawayList.find(x => x.runwayCode == data.detailTemp.departure.RUNWAY)

      this.formSchedule.patchValue({
        terminal_ar: data.arrival.terminal,
        from_ar: data.arrival.from,
        to_ar: data.arrival.to,
        eta_ar: data.arrival.eta,
        ata_ar: data.arrival.ata,
        regNo_ar: data.arrival.reg,
        remarkNote_ar: data.arrival.remarkNote,
        noteDelay_ar: data.detailTemp.arrival.NOTE_DELAY,
        remark_ar: remarkTemp_ar,
        suffix_ar: suffixTemp_ar,
        runaway_ar: runawayTemp_ar,
        serviceType_ar: serviceTypeTemp_ar,
        flightType_ar: data.arrival.typeFlight,

        terminal_der: data.departure.terminal,
        from_der: data.departure.from,
        to_der: data.departure.to,
        eta_der: data.departure.eta,
        ata_der: data.departure.ata,
        regNo_der: data.departure.reg,
        remarkNote_der: data.departure.remarkNote,
        noteDelay_der: data.detailTemp.arrival.NOTE_DELAY,
        remark_der: remarkTemp_der,
        suffix_der: suffixTemp_der,
        runaway_der: runawayTemp_der,
        serviceType_der: serviceTypeTemp_der,
        flightType_der: data.departure.typeFlight,
      })
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

  getMaster() {

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
        "SUFFIX": formValue.suffix_ar.suffixId,
        "LEG": flightInfo.detailTemp.arrival.LEG,
        "TERMINAL_ID": formValue.terminal_ar,
        "STATION1": formValue.from_ar,
        "STATION2": formValue.to_ar,
        "STATION3": flightInfo.detailTemp.arrival.STATION3,
        "STATION4": flightInfo.detailTemp.arrival.STATION4,
        "ATMSATAD": ata_ar,
        "REMARK_CODE": formValue.remark_ar.remarkCode,
        "AIRCRAFT_SUBTYPE": formValue.serviceType_ar.AIRCRAFT_SUBTYPE,
        "NOTE_DELAY": formValue.noteDelay_ar,
        "FLIGHT_NUMBER": flightInfo.detailTemp.arrival.FLIGHT_NO,
        "AIRCRAFT_REG_NO": formValue.regNo_ar,
        "CATEGORY_CODE": formValue.flightType_ar,
        "STAD": flightInfo.detailTemp.arrival.STAD,
        "AIRETAD": eta_ar,
        "RUNWAY": formValue.runaway_ar.runwayCode,
        "REMARK_NOTE": formValue.remarkNote_ar,
        "AFSKEY": flightInfo.arrival.afskey
      },
      "DEPARTURE": {
        "IATA_AIRLINE_CODE": flightInfo.detailTemp.departure.IATA_AIRLINE_CODE,
        "SUFFIX": formValue.suffix_der.suffixId,
        "LEG": flightInfo.detailTemp.departure.LEG,
        "TERMINAL_ID": formValue.terminal_der,
        "STATION1": formValue.from_der,
        "STATION2": formValue.to_der,
        "STATION3": flightInfo.detailTemp.departure.STATION3,
        "STATION4": flightInfo.detailTemp.departure.STATION4,
        "ATMSATAD": ata_der,
        "REMARK_CODE": formValue.remark_der.remarkCode,
        "AIRCRAFT_SUBTYPE": formValue.serviceType_der.AIRCRAFT_SUBTYPE,
        "NOTE_DELAY": formValue.noteDelay_der,
        "FLIGHT_NUMBER": flightInfo.detailTemp.departure.FLIGHT_NO,
        "AIRCRAFT_REG_NO": formValue.regNo_der,
        "CATEGORY_CODE": formValue.flightType_der,
        "STAD": flightInfo.detailTemp.departure.STAD,
        "AIRETAD": eta_der,
        "RUNWAY": formValue.runaway_der.runwayCode,
        "REMARK_NOTE": formValue.remarkNote_der,
        "AFSKEY": flightInfo.departure.afskey
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

  back() {
    let url = localStorage.getItem("flightDetail")
    this.router.navigateByUrl(url)
  }
}
