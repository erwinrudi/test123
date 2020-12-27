import { Component } from '@angular/core';
import { GeneralService } from "../../general.service";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import * as moment from "moment";
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlightActivityService } from './../flight-activity.service';

@Component({
  selector: 'app-movement-form',
  templateUrl: 'movement-form.page.html',
  styleUrls: ['movement-form.page.scss']
})

export class MovementFormPage {
  formMovement: FormGroup;
  isLoading: boolean;
  pageType: string;
  id = "";
  formType = 0;
  movement = null
  standCodeList = [];
  seq = 1;
  movTypeList = [];

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
    this.formMovement = this.formBuilder.group({
      inBlock: '',
      offBlock: '',
      standCode: '',
      movType: ''
    })

    this.id = this.activatedRoute.snapshot.params["id"];

    if (this.id) {
      this.pageType = "edit";
      this.getData()
    } else {
      this.pageType = "new";
      let movement = null
      movement = localStorage.getItem('movement')
      movement = JSON.parse(movement)
      this.movTypeList = movement.moveTypeList
      this.standCodeList = movement.standCodeList
      if (movement.tempList.length > 0) {
        let tempSeq = movement.tempList[movement.tempList.length - 1]
        tempSeq = parseInt(tempSeq.AIRCRAFT_VISIT_SEQ)
        this.seq = tempSeq + 1
      }
    }

    this.isLoading = false;
  }

  getData() {
    let movement = null
    movement = localStorage.getItem('movement')

    if (movement) {
      movement = JSON.parse(movement)
      this.movTypeList = movement.moveTypeList
      this.standCodeList = movement.standCodeList
      let mov = movement.tempList.find(x => x.IDDATA == this.id)
      this.movement = mov
      this.formMovement.patchValue({
        inBlock: mov.ON_BLOCK_TIME,
        offBlock: mov.OFF_BLOCK_TIME,
        standCode: mov.STAND_CODE,
        movType: mov.VALUE
      })
    }
  }

  onSubmit(e) {
    const formValue = this.formMovement.value
    let flightInfo = null
    flightInfo = JSON.parse(localStorage.getItem('flightInfo'))
    let body = null
    if (this.pageType == "edit") {
      body = {
        "AIRCRAFT_REG_NO": flightInfo.arrival.reg,
        "LANDING_CODE": "",
        "IDDATA": this.id,
        "AFSKEY": flightInfo.arrival.afskey,
        "PAIRED_AFSKEY": flightInfo.departure.afskey,
        "AIRCRAFT_VISIT_SEQ": this.movement.AIRCRAFT_VISIT_SEQ,
        "ON_BLOCK_TIME": formValue.inBlock,
        "STAND_CODE": formValue.standCode,
        "AREA_CODE": this.movement.AREA_CODE,
        "OFF_BLOCK_TIME": formValue.offBlock,
        "VALUE": formValue.movType,
      }
    }
    else {
      body = {
        "AIRCRAFT_REG_NO": flightInfo.arrival.reg,
        "LANDING_CODE": "",
        "IDDATA": "",
        "AFSKEY": flightInfo.arrival.afskey,
        "PAIRED_AFSKEY": flightInfo.departure.afskey,
        "AIRCRAFT_VISIT_SEQ": this.seq,
        "ON_BLOCK_TIME": formValue.inBlock,
        "STAND_CODE": formValue.standCode,
        "AREA_CODE": "",
        "OFF_BLOCK_TIME": formValue.offBlock,
        "VALUE": formValue.movType,
      }
    }

    this.flightActivityService.submitMovement(body).subscribe((res: any) => {
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

  onChangeType(type) {
    this.formType = type
  }


}
