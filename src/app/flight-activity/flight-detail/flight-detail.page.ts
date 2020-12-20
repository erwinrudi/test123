import { Component, OnInit } from '@angular/core';
import { GeneralService } from "../../general.service";
import * as moment from "moment";
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlightActivityService } from './../flight-activity.service';

@Component({
  selector: 'app-detail-menu',
  templateUrl: 'flight-detail.page.html',
  styleUrls: ['flight-detail.page.scss']
})
export class FlightDetailPage {
  modal = null;
  isLoading: boolean;
  props: any = [
    {
      field: 'codeArrival',
      value: ''
    },
    {
      field: 'codeDeparture',
      value: ''
    },
    {
      field: 'afsKey',
      value: ''
    }
  ];


  typeList = [
    {
      value: 'movement',
      text: 'Movement'
    },
    {
      value: 'avio',
      text: 'Avio'
    },
    {
      value: 'pax',
      text: 'Pax'
    },
  ];

  type = "movement";

  flightInfo = {
    id: '',
    detailTemp: {
      arrival: null,
      departure: null
    },
    arrival: {
      terminal: '',
      flightNo: '',
      flightType: '',
      from: '',
      to: '',
      ata: '',
      eta: '',
      regNo: '',
      remark: '',
      afskey: '',
      reg: '',
      typeFlight: '',
      remarkNote: ''
    },
    departure: {
      terminal: '',
      flightNo: '',
      flightType: '',
      from: '',
      to: '',
      ata: '',
      eta: '',
      regNo: '',
      remark: '',
      afskey: '',
      reg: '',
      typeFlight: '',
      remarkNote: ''
    }
  };

  pax = {
    type: 'arrival',
    id: 0,
    arrival: {
      adult: '',
      child: '',
      infant: '',
      transit: '',
      transfer: '',
      ctew: '',
      exCrew: '',
      divert: '',
      missed: '',
      counter: ''
    },

    departure: {
      adult: '',
      child: '',
      infant: '',
      transit: '',
      transfer: '',
      ctew: '',
      exCrew: '',
      divert: '',
      missed: '',
      counter: ''
    }
  };

  movement = {
    tempList: [],
    moveTypeList: [],
    standCodeList: [],
    landing: null,
    list: [
      // {
      //   id: '0',
      //   title: 'Flight Activity Movement',
      //   inBlock: '25 November 2020 9.10',
      //   offBlock: '25 November 2020 9.10',
      //   standCode: 'A1',
      //   movType: 'Normal'
      // },
    ]
  }

  avio = {
    list: [],
    avioTypeList: []
  }

  constructor(
    private generalService: GeneralService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router,
    private flightActivityService: FlightActivityService
  ) {
    activatedRoute.params.subscribe(val => {
      this.getQueryParams();

      new Promise((resolve, reject) => {
        Promise.all([
          this.getDetail(),
          this.getPax(),
          this.getMovement()
        ]).then(([]) => {
        })
      })
    });
  }

  ngOnInit() {

  }

  onChangeType(e) {
    this.type = e
  }

  onChangePaxType(val) {
    this.pax.type = val
  }

  showModal(content = null) {
    this.modal = content;
  }

  getQueryParams() {
    const params = this.activatedRoute.snapshot.queryParams;
    let tempProp = this.props
    this.props.map((prop, index) => {
      if (params[prop.field]) {
        if (prop.field == 'afsKey') {
          this.flightInfo.id = params[prop.field]
        }
        if (prop.field == 'codeArrival') {
          this.flightInfo.arrival.afskey = params[prop.field]
        }
        if (prop.field == 'codeDeparture') {
          this.flightInfo.departure.afskey = params[prop.field]
          this.pax.id = params[prop.field]
        }
        tempProp[index].value = params[prop.field]
      }
    })
  }

  getDetail() {
    return new Promise((resolve, reject) => {
      this.flightActivityService.getFlightDetail(this.props).subscribe((res: any) => {
        let data = res.data
        this.flightInfo.detailTemp.arrival = data.ARRIVAL[0]
        this.flightInfo.detailTemp.departure = data.DEPARTURE[0]

        //map UI
        let arrivalTemp = this.flightInfo.detailTemp.arrival
        let departureTemp = this.flightInfo.detailTemp.departure

        let arrival = this.flightInfo.arrival
        let departure = this.flightInfo.departure

        arrival.terminal = arrivalTemp.TERMINAL_ID;
        arrival.flightNo = arrivalTemp.FLIGHT_NO;
        arrival.flightType = arrivalTemp.CATEGORY_CODE == "I" ? "Int" : "Dom";
        arrival.from = arrivalTemp.STATION1
        arrival.to = arrivalTemp.STATION2
        arrival.ata = arrivalTemp.ATMSATAD
        arrival.eta = arrivalTemp.AIRETAD
        arrival.regNo = arrivalTemp.AIRCRAFT_REG_NO + " - " + arrivalTemp.AIRCRAFT_TYPE
        arrival.remark = arrival.remark
        arrival.afskey = arrival.afskey
        arrival.typeFlight = arrivalTemp.CATEGORY_CODE
        arrival.reg = arrivalTemp.AIRCRAFT_REG_NO
        arrival.remarkNote = arrivalTemp.REMARK_NOTE ? arrivalTemp.REMARK_NOTE : ''

        departure.terminal = departureTemp.TERMINAL_ID;
        departure.flightNo = departureTemp.FLIGHT_NO;
        departure.flightType = departureTemp.CATEGORY_CODE == "I" ? "Int" : "Dom";
        departure.from = departureTemp.STATION1
        departure.to = departureTemp.STATION2
        departure.ata = departureTemp.ATMSATAD
        departure.eta = departureTemp.AIRETAD
        departure.regNo = departureTemp.AIRCRAFT_REG_NO + " - " + departureTemp.AIRCRAFT_TYPE
        departure.remark = departure.remark
        departure.afskey = departure.afskey
        departure.typeFlight = departureTemp.CATEGORY_CODE
        departure.reg = departureTemp.AIRCRAFT_REG_NO
        departure.remarkNote = departureTemp.REMARK_NOTE ? departureTemp.REMARK_NOTE : ''

        this.flightInfo.arrival = arrival
        this.flightInfo.departure = departure
        let localflightInfo = JSON.stringify(this.flightInfo)
        localStorage.setItem('flightInfo', localflightInfo)
        //map UI
        resolve(true)
      },
        error => {
          if (error.response) {
            this.generalService.notification(error.response.message)
          }
          else {
            this.generalService.notification("ERROR CONNECTION")
          }
          resolve(true)
        }
      );
    });
  }

  getPax() {
    return new Promise((resolve, reject) => {
      this.flightActivityService.getFlightPax(this.props).subscribe((res: any) => {
        let data = res.data

        let arrivalTemp = data.ARRIVAL;
        let departureTemp = data.DEPARTURE;

        let arrival = this.pax.arrival;
        let departure = this.pax.departure;

        arrival.adult = arrivalTemp.ADULT;
        arrival.child = arrivalTemp.CHILD;
        arrival.counter = arrivalTemp.CHILD;
        arrival.ctew = arrivalTemp.CREW;
        arrival.divert = arrivalTemp.DIVERT;
        arrival.exCrew = arrivalTemp.EXTRA_CREW;
        arrival.infant = arrivalTemp.INFANT;
        arrival.missed = arrivalTemp.MISSED;
        arrival.transfer = arrivalTemp.TRANSFER;
        arrival.transit = arrivalTemp.TRANSIT;

        departure.adult = departureTemp.ADULT;
        departure.child = departureTemp.CHILD;
        departure.counter = departureTemp.CHILD;
        departure.ctew = departureTemp.CREW;
        departure.divert = departureTemp.DIVERT;
        departure.exCrew = departureTemp.EXTRA_CREW;
        departure.infant = departureTemp.INFANT;
        departure.missed = departureTemp.MISSED;
        departure.transfer = departureTemp.TRANSFER;
        departure.transit = departureTemp.TRANSIT;

        this.pax.arrival = arrival;
        this.pax.departure = departure;

        let localPax = JSON.stringify(this.pax)
        localStorage.setItem('pax', localPax)
        //map UI
        resolve(true)
      },
        error => {
          if (error.response) {
            this.generalService.notification(error.response.message)
          }
          else {
            this.generalService.notification("ERROR CONNECTION")
          }
          resolve(true)
        }
      );
    });
  }

  getMovement() {
    return new Promise((resolve, reject) => {
      this.flightActivityService.getFlightMovement(this.props).subscribe((res: any) => {
        let data = res.data
        let movement = this.movement
        movement.tempList = data.STAND_ALL
        movement.moveTypeList = []
        Object.keys(data.VALUE).forEach(function (key) {
          let optionVal = {
            value: key,
            text: data.VALUE[key]
          }
          movement.moveTypeList.push(optionVal)
        });
        movement.standCodeList = []
        data.STAND_CODE.map(x => {
          let optionVal = x
          optionVal['value'] = optionVal.STAND_CODE
          optionVal['text'] = optionVal.STAND_CODE

          movement.standCodeList.push(optionVal)
        })
        movement.list = []
        movement.tempList.map((x, index) => {
          let movType = movement.moveTypeList.find(type => type.value == x.VALUE)
          let body = {
            id: x.IDDATA,
            title: 'Flight Activity Movement',
            inBlock: x.ON_BLOCK_TIME,
            offBlock: x.OFF_BLOCK_TIME,
            standCode: x.STAND_CODE,
            movType: movType.text,
            movTypeId: movType.value,
            sort: index + 1
          }
          movement.list.push(body)
        })
        movement.landing = data.LANDING[0]
        localStorage.setItem('movement', JSON.stringify(movement))
        this.movement = movement
        this.getAvio()
      },
        error => {
          if (error.response) {
            this.generalService.notification(error.response.message)
          }
          else {
            this.generalService.notification("ERROR CONNECTION")
          }
          this.getAvio()
        }
      );
    });
  }

  getAvio() {
    return new Promise((resolve, reject) => {
      this.flightActivityService.getFlightAvio(this.props).subscribe((res: any) => {
        let data = res.data;
        let avio = this.avio;
        avio.avioTypeList = [];
        data.MASTER.map(x => {
          let optionVal = x
          optionVal['value'] = x.SERVICE_ID;
          optionVal['text'] = x.SERVICE_NAME;

          avio.avioTypeList.push(optionVal);
        })

        avio.list = [];
        data.LIST.map(x => {
          let listVal = x;
          let mov = this.movement.list.find(mov => mov.id == x.IDDATA_SP);
          listVal['MOVEMENT'] = mov;
          let avioType = avio.avioTypeList.find(type => type.value == x.SERVICE_CODE)
          listVal['AVIO_TYPE'] = avioType
          avio.list.push(listVal);
        })
        
        localStorage.setItem('avio', JSON.stringify(avio))
        this.avio = avio;
        resolve(true)
      },
        error => {
          if (error.response) {
            this.generalService.notification(error.response.message)
          }
          else {
            this.generalService.notification("ERROR CONNECTION")
          }
          resolve(true)
        }
      );
    });
  }
}
