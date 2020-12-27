import { Component } from '@angular/core';
import { GeneralService } from "../../general.service";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import * as moment from "moment";
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlightActivityService } from './../flight-activity.service';

@Component({
  selector: 'app-cargo-form',
  templateUrl: 'cargo-form.page.html',
  styleUrls: ['cargo-form.page.scss']
})
export class CargoFormPage {
  formCargo: FormGroup;
  isLoading: boolean;
  pageType: string;
  id = null;
  formType = 0;
  afskey = {
    arrival: '',
    derparture: ''
  }
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
    this.formCargo = this.formBuilder.group({
      baggage_ar: '0',
      cargo_ar: '0',
      pos_ar: '0',

      baggage_der: '0',
      cargo_der: '0',
      pos_der: '0',
    })
    let flightInfo = null
    flightInfo = localStorage.getItem('flightInfo')
    flightInfo = JSON.parse(flightInfo)
    this.afskey.arrival = flightInfo.arrival.afskey
    this.afskey.derparture = flightInfo.departure.afskey
    this.id = this.activatedRoute.snapshot.params["id"];

    if (this.id) {
      this.pageType = "edit";
      this.getDetail()
    } else {
      this.pageType = "new";
    }

    this.isLoading = false;
  }

  getDetail() {
    let cargo = null
    cargo = localStorage.getItem('cargo')
    cargo = JSON.parse(cargo)
    if (this.id == cargo.id) {
      let arrival = cargo.arrival
      let departure = cargo.departure
      
      this.formCargo.patchValue({
        baggage_ar: arrival.baggage,
        cargo_ar: arrival.cargo,
        pos_ar: arrival.pos,
  
        baggage_der: departure.baggage,
        cargo_der: departure.cargo,
        pos_der: departure.pos
      })
    }
  }

  onSubmit(e) {
    const formValue = this.formCargo.value;

    let body = {
      "ARRIVAL":
      {
        "AFSKEY": this.afskey.arrival,
        "BAGGAGE": formValue.baggage_ar,
        "CARGO": formValue.cargo_ar,
        "POS": formValue.pos_ar
      },
      "DEPARTURE": {
        "AFSKEY": this.afskey.derparture,
        "BAGGAGE": formValue.baggage_der,
        "CARGO": formValue.cargo_der,
        "POS": formValue.pos_der
      }
    }

    this.flightActivityService.submitCargo(body).subscribe((res: any) => {
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
