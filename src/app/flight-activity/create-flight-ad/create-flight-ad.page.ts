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
  branch = ""
  suffixList = []
  remarkList = []
  runawayList = []
  serviceTypeList = []
  remarkNoteList = []

  constructor(
    private formBuilder: FormBuilder,
    private generalService: GeneralService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router,
    private flightActivityService: FlightActivityService
  ) {
    this.branch = localStorage.getItem('branch')
  }

  ngOnInit() {
    this.formFlight = this.formBuilder.group({
      no_ar: ['', [Validators.required]],
      airline_ar: ['', [Validators.required]],
      suffix_ar: ['', [Validators.required]],
      runaway_ar: ['', [Validators.required]],
      remark_ar: ['', []],
      serviceType_ar: ['', [Validators.required]],
      registrationNumber_ar: ['', [Validators.required]],
      flightType_ar: ['', [Validators.required]],
      terminal_ar: ['', [Validators.required]],
      flightDate_ar: ['', [Validators.required]],
      ata_ar: ['', []],
      eta_ar: ['', []],
      station1_ar: ['', [Validators.required]],
      station2_ar: ['', [Validators.required]],
      remarkNote_ar: ['', []],
      noteDelay_ar: ['', []],

      no_der: ['', [Validators.required]],
      suffix_der: ['', [Validators.required]],
      runaway_der: ['', [Validators.required]],
      remark_der: ['', []],
      serviceType_der: ['', [Validators.required]],
      registrationNumber_der: ['', [Validators.required]],
      flightType_der: ['', [Validators.required]],
      terminal_der: ['', [Validators.required]],
      flightDate_der: ['', [Validators.required]],
      ata_der: ['', []],
      eta_der: ['', []],
      station1_der: ['', [Validators.required]],
      station2_der: ['', [Validators.required]],
      remarkNote_der: ['', []],
      noteDelay_der: ['', []],
    })

    this.isLoading = false;
    this.getData()
    this.formFlight.patchValue({
      station2_ar: this.branch,
      station1_der: this.branch
    })
  }

  getData() {
    this.flightActivityService.getMasterAirline().subscribe((res: any) => {
      let data = res.data
      this.runawayList = []
      this.remarkList = []
      this.serviceTypeList = []
      this.suffixList = []
      this.remarkNoteList = []

      data.MASTER_REMARK.map(x => {
        let optionVal = {
          remarkCode: x.REMARK_CODE,
          remark: x.REMARK,
          text: x.REMARK_CODE + " - " + x.REMARK,
        }
        this.remarkList.push(optionVal)
      })

      data.MASTER_RUNAWAY.map(x => {
        let optionVal = {
          runwayCode: x.RUNWAY_CODE,
          runway: x.RUNWAY_NAME,
          text: x.RUNWAY_CODE + " - " + x.RUNWAY_NAME,
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
          text: x.SUFFIX_ID + " - " + x.SUFFIX_NAME,
        }
        this.suffixList.push(optionVal)
      })

      data.MASTER_REMARK_NOTE.map(x => {
        let optionVal = {
          remarkCode: x.REMARK_CODE,
          remark: x.REMARK,
          text: x.REMARK_CODE + " - " + x.REMARK,
        }
        this.remarkNoteList.push(optionVal)
      })

      // let flightType = this.flightTypeList[0]
      // this.formFlight.patchValue({
      //   flightType_der: flightType,
      //   flightType_ar: flightType
      // })
      // data.
    },
      error => {
        if (error.error) {
          this.generalService.notification(error.error.message)
        }
        else {
          this.generalService.notification("ERROR CONNECTION")
        }
      }
    );
  }

  onSubmit(e) {
    const formValue = this.formFlight.value;
    let flightDate_ar = moment(formValue.flightDate_ar, "YYYY-MM-DDTHH:mmZ").format("YYYY-MM-DD HH:mm:ss")
    let flightDate_der = moment(formValue.flightDate_der, "YYYY-MM-DDTHH:mmZ").format("YYYY-MM-DD HH:mm:ss")

    let ata_ar = moment(formValue.ata_ar, "YYYY-MM-DDTHH:mmZ").format("YYYY-MM-DD HH:mm:ss")
    let ata_der = moment(formValue.ata_der, "YYYY-MM-DDTHH:mmZ").format("YYYY-MM-DD HH:mm:ss")

    let eta_ar = moment(formValue.eta_ar, "YYYY-MM-DDTHH:mmZ").format("YYYY-MM-DD HH:mm:ss")
    let eta_der = moment(formValue.eta_der, "YYYY-MM-DDTHH:mmZ").format("YYYY-MM-DD HH:mm:ss")

    let body = {
      "ARRIVAL":
      {
        "IATA_AIRLINE_CODE": formValue.airline_ar,
        "SUFFIX": formValue.suffix_ar.suffixId,
        "LEG": "A",
        "TERMINAL_ID": formValue.terminal_ar,
        "STATION1": formValue.station1_ar,
        "STATION2": formValue.station2_ar,
        "STATION3": "",
        "STATION4": "",
        "ATMSATAD": ata_ar,
        "REMARK_CODE": formValue.remark_ar && formValue.remark_ar != "" ? formValue.remark_ar.remarkCode : "",
        "AIRCRAFT_SUBTYPE": formValue.serviceType_ar.AIRCRAFT_SUBTYPE,
        "NOTE_DELAY": formValue.noteDelay_ar,
        "FLIGHT_NUMBER": formValue.no_ar,
        "AIRCRAFT_REG_NO": formValue.registrationNumber_ar,
        "CATEGORY_CODE": formValue.flightType_ar.value,
        "STAD": flightDate_ar,
        "AIRETAD": eta_ar,
        "RUNWAY": formValue.runaway_ar.runwayCode,
        "REMARK_NOTE": formValue.remarkNote_ar && formValue.remarkNote_ar != "" ? formValue.remarkNote_ar.remarkCode : ""
      },
      "DEPARTURE": {
        "IATA_AIRLINE_CODE": formValue.airline_ar,
        "SUFFIX": formValue.suffix_der.suffixId,
        "LEG": "D",
        "TERMINAL_ID": formValue.terminal_der,
        "STATION1": formValue.station1_der,
        "STATION2": formValue.station2_der,
        "STATION3": "",
        "STATION4": "",
        "ATMSATAD": ata_der,
        "REMARK_CODE": formValue.remark_der && formValue.remark_der != "" ? formValue.remark_der.remarkCode : "",
        "AIRCRAFT_SUBTYPE": formValue.serviceType_der.AIRCRAFT_SUBTYPE,
        "NOTE_DELAY": formValue.noteDelay_der,
        "FLIGHT_NUMBER": formValue.no_der,
        "AIRCRAFT_REG_NO": formValue.registrationNumber_der,
        "CATEGORY_CODE": formValue.flightType_der.value,
        "STAD": flightDate_der,
        "AIRETAD": eta_der,
        "RUNWAY": formValue.runaway_der.runwayCode,
        "REMARK_NOTE": formValue.remarkNote_der && formValue.remarkNote_der != "" ? formValue.remarkNote_der.remarkCode : ""
      }
    }

    this.flightActivityService.submitAirline(body).subscribe((res: any) => {
      this.generalService.notification("SUKSES")
      this.router.navigateByUrl("/flight/create-menu")
    },
      error => {
        if (error.error) {
          this.generalService.notification(error.error.message)
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
    this.router.navigateByUrl("/flight/create-menu")
  }

}
