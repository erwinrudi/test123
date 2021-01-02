import { Component } from '@angular/core';
import { GeneralService } from "../../general.service";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import * as moment from "moment";
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlightActivityService } from './../flight-activity.service';

@Component({
  selector: 'app-create-flight-single',
  templateUrl: 'create-flight-single.page.html',
  styleUrls: ['create-flight-single.page.scss']
})
export class CreateFlightSinglePage {
  formFlight: FormGroup;
  isLoading: boolean;

  suffixList = []
  remarkList = []
  runawayList = []
  serviceTypeList = []
  remarkNoteList = []
  leg = "A";
  branch = "";
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
    })

    const params = this.activatedRoute.snapshot.queryParams;
    if (typeof params.leg != "undefined") {
      this.leg = params.leg.toUpperCase();
    }
    if (this.leg == "A") {
      this.formFlight.patchValue({
        station2_ar: this.branch
      })
    }
    if (this.leg == "D") {
      this.formFlight.patchValue({
        station1_ar: this.branch
      })
    }
    this.isLoading = false;
    this.getData()
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
    let ata_ar = moment(formValue.ata_ar, "YYYY-MM-DDTHH:mmZ").format("YYYY-MM-DD HH:mm:ss")
    let eta_ar = moment(formValue.eta_ar, "YYYY-MM-DDTHH:mmZ").format("YYYY-MM-DD HH:mm:ss")

    let body = {
      "IATA_AIRLINE_CODE": formValue.airline_ar,
      "SUFFIX": formValue.suffix_ar.suffixId,
      "LEG": this.leg,
      "TERMINAL_ID": formValue.terminal_ar,
      "STATION1": formValue.station1_ar,
      "STATION2": formValue.station2_ar,
      "STATION3": "",
      "STATION4": "",
      "ATMSATAD": ata_ar,
      "REMARK_CODE": formValue.remark_ar.remarkCode ? formValue.remark_ar.remarkCode : "",
      "AIRCRAFT_SUBTYPE": formValue.serviceType_ar.AIRCRAFT_SUBTYPE,
      "NOTE_DELAY": formValue.noteDelay_ar,
      "FLIGHT_NUMBER": formValue.no_ar,
      "AIRCRAFT_REG_NO": formValue.registrationNumber_ar,
      "CATEGORY_CODE": formValue.flightType_ar.value,
      "STAD": flightDate_ar,
      "AIRETAD": eta_ar,
      "RUNWAY": formValue.runaway_ar.runwayCode,
      "REMARK_NOTE": formValue.remarkNote_ar.remarkCode ? formValue.remarkNote_ar.remarkCode : ""
    }
  }

  back() {
    this.router.navigateByUrl("/flight/create-menu")
  }
}
