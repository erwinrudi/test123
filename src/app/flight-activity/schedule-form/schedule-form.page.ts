import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

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
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
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

  }

  onChangeType(type) {
    this.formType = type
  }


}
