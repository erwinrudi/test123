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
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      frq: ['', [Validators.required]],
      mov: ['', [Validators.required]],
      avioType: ['', [Validators.required]],
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
      frq: this.avio.VALUE,
      mov: this.avio.MOVEMENT.id,
      avioType: this.avio.AVIO_TYPE.value
    })
  }

  onSubmit(e) {
    const formValue = this.formAvio.value;
    let mov = this.movList.find(x => x.id == formValue.mov)
    let flightInfo = null
    flightInfo = JSON.parse(localStorage.getItem('flightInfo'))
    let startTime = moment(formValue.startTime).format("YYYY-MM-DD HH:mm:ss")
    let endTime = moment(formValue.endTime).format("YYYY-MM-DD HH:mm:ss")

    let minDate = moment(mov.inBlock).format("YYYY-MM-DD HH:mm:ss")
    let maxDate = moment(mov.offBlock).format("YYYY-MM-DD HH:mm:ss")

    if (moment(endTime).isSameOrBefore(startTime)) {
      this.generalService.notification("End Time harus lebih besar dari Start Time")
    }
    else if (moment(startTime).isSameOrBefore(minDate) || moment(maxDate).isSameOrBefore(endTime)) {
      this.generalService.notification("Range tanggal harus dari" + mov.inBlock + " sampai " + mov.offBlock)
    }
    else {
      let body = null
      if (this.pageType == "edit") {
        body = {
          "IDDATA": this.avio.IDDATA,
          "AFSKEY": this.avio.AFSKEY,
          "IDDATA_SP": mov.id,
          "AIRCRAFT_VISIT_SEQ": this.avio.AIRCRAFT_VISIT_SEQ,
          "SERVICE_CODE": formValue.avioType,
          "VALUE": formValue.frq,
          "START": startTime,
          "END": endTime
        }
      }
      else {
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
          if (error.error) {
            this.generalService.notification(error.error.message)
          }
          else {
            this.generalService.notification("ERROR CONNECTION")
          }
        }
      );
    }
  }


}
