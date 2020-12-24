import { Component } from '@angular/core';
import { GeneralService } from "../../general.service";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import * as moment from "moment";
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlightActivityService } from './../flight-activity.service';


@Component({
  selector: 'app-avio-form',
  templateUrl: 'avio-form.page.html',
  styleUrls: ['avio-form.page.scss']
})
export class AvioFormPage {
  formAvio: FormGroup;
  isLoading: boolean;
  pageType: string;
  id = null;
  movList = [];
  avio = null;
  avioType = [];
  seq = 1;
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
    this.formAvio = this.formBuilder.group({
      startTime: '',
      endTime: '',
      frq: '',
      mov: '',
      avioType: ''
    })

    this.id = this.activatedRoute.snapshot.params["id"];

    let avio = null
    avio = localStorage.getItem('avio')
    avio = JSON.parse(avio)

    let movement = null
    movement = localStorage.getItem('movement')
    movement = JSON.parse(movement)

    this.movList = movement.list
    this.avioType = avio.avioTypeList

    if (this.id) {
      this.pageType = "edit";
      this.getDetail(avio)

    } else {
      this.pageType = "new";
    }


    this.isLoading = false;
  }

  getDetail(avio) {
    let av = avio.list.find(x => x.IDDATA == this.id)
    this.avio = av

    this.formAvio.patchValue({
      startTime: this.avio.START,
      endTime: this.avio.END,
      frq: '',
      mov: this.avio.MOVEMENT.id,
      avioType: this.avio.AVIO_TYPE.value
    })
  }

  onSubmit(e) {
    const formValue = this.formAvio.value;
    let mov = this.movList.find(x => x.id == formValue.mov)
    let flightInfo = null
    flightInfo = JSON.parse(localStorage.getItem('flightInfo'))
    let startTime = moment(formValue.startTime, "YYYY-MM-DDTHH:mmZ").format("YYYY-MM-DD hh:mm:ss")
    let endTime = moment(formValue.endTime, "YYYY-MM-DDTHH:mmZ").format("YYYY-MM-DD hh:mm:ss")
    let body = null
    if (this.pageType == "edit") {
      body = {
        "IDDATA": this.avio.IDDATA,
        "AFSKEY": this.avio.AFSKEY,
        "IDDATA_SP": mov.id,
        "AIRCRAFT_VISIT_SEQ": this.avio.AIRCRAFT_VISIT_SEQ,
        "SERVICE_CODE": formValue.avioType,
        "VALUE": mov.movTypeId,
        "START": startTime,
        "END": endTime
      }
    }
    else{
      let avio = null
      avio = localStorage.getItem('avio')
      avio = JSON.parse(avio)
      let tempAvio = avio.list.filter(x => x.IDDATA_SP == mov.id)
      if (tempAvio.length > 0) {
        let tempSeq = tempAvio[tempAvio.length - 1]
        tempSeq = parseInt(tempSeq.AIRCRAFT_VISIT_SEQ)
        this.seq = tempSeq + 1
      }
      body = {
        "IDDATA": "",
        "AFSKEY": flightInfo.arrival.afskey,
        "IDDATA_SP": mov.id,
        "AIRCRAFT_VISIT_SEQ": this.seq,
        "SERVICE_CODE": formValue.avioType,
        "VALUE": mov.movTypeId,
        "START": startTime,
        "END": endTime
      }
    }
    this.flightActivityService.submitAvio(body).subscribe((res: any) => {
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


}
