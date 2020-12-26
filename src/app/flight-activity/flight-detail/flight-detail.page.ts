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
    {
      value: 'cargo',
      text: 'Cargo'
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

  cargo = {
    type: 'arrival',
    id: 0,
    arrival: {
      baggage: '0',
      cargo: '0',
      pos: '0'
    },
    departure: {
      baggage: '0',
      cargo: '0',
      pos: '0'
    }
  }

  pax = {
    type: 'arrival',
    id: 0,
    arrival: {
      adult: '0',
      child: '0',
      infant: '0',
      transit: '0',
      transfer: '0',
      ctew: '0',
      exCrew: '0',
      divert: '0',
      missed: '0',
      counter: '0'
    },

    departure: {
      adult: '0',
      child: '0',
      infant: '0',
      transit: '0',
      transfer: '0',
      ctew: '0',
      exCrew: '0',
      divert: '0',
      missed: '0',
      counter: '0'
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

  estimateBilling = {
    invoice: [],
    header: null,
    total: null,
    totalPrice: "0"
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
          this.getMovement(),
          this.getCargo()
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
          this.cargo.id = params[prop.field]
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

        if (arrivalTemp) {
          arrival.terminal = arrivalTemp.TERMINAL_ID;
          arrival.flightNo = arrivalTemp.FLIGHT_NO;
          arrival.flightType = arrivalTemp.CATEGORY_CODE == "I" ? "Int" : "Dom";
          arrival.from = arrivalTemp.STATION1
          arrival.to = arrivalTemp.STATION2
          arrival.ata = arrivalTemp.ATMSATAD ? moment(arrivalTemp.ATMSATAD).format("D MMMM YYYY hh:mm") : ""
          arrival.ata = arrival.ata == "Invalid date" ? "" : arrival.ata
          arrival.eta = arrivalTemp.AIRETAD ? moment(arrivalTemp.AIRETAD).format("D MMMM YYYY hh:mm") : ""
          arrival.eta = arrival.eta == "Invalid date" ? "" : arrival.eta
          arrival.regNo = arrivalTemp.AIRCRAFT_REG_NO
          arrival.remark = arrival.remark
          arrival.afskey = arrival.afskey
          arrival.typeFlight = arrivalTemp.CATEGORY_CODE
          arrival.reg = arrivalTemp.AIRCRAFT_REG_NO
          arrival.remarkNote = arrivalTemp.REMARK_NOTE ? arrivalTemp.REMARK_NOTE : ''
        }

        if (departureTemp) {
          departure.terminal = departureTemp.TERMINAL_ID;
          departure.flightNo = departureTemp.FLIGHT_NO;
          departure.flightType = departureTemp.CATEGORY_CODE == "I" ? "Int" : "Dom";
          departure.from = departureTemp.STATION1
          departure.to = departureTemp.STATION2
          departure.ata = departureTemp.ATMSATAD ? moment(departureTemp.ATMSATAD).format("D MMMM YYYY hh:mm") : ""
          departure.ata = departure.ata == "Invalid date" ? "" : departure.ata
          departure.eta = departureTemp.AIRETAD ? moment(departureTemp.AIRETAD).format("D MMMM YYYY hh:mm") : ""
          departure.eta = departure.eta == "Invalid date" ? "" : departure.eta
          departure.regNo = departureTemp.AIRCRAFT_REG_NO
          departure.remark = departure.remark
          departure.afskey = departure.afskey
          departure.typeFlight = departureTemp.CATEGORY_CODE
          departure.reg = departureTemp.AIRCRAFT_REG_NO
          departure.remarkNote = departureTemp.REMARK_NOTE ? departureTemp.REMARK_NOTE : ''
        }
        this.flightInfo.arrival = arrival
        this.flightInfo.departure = departure
        let localflightInfo = JSON.stringify(this.flightInfo)
        localStorage.setItem('flightInfo', localflightInfo)
        //map UI
        this.getEstimateBilling();
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

        let arrivalCounter = 0;
        let departureCounter = 0;

        if (arrivalTemp) {
          arrival.adult = arrivalTemp.ADULT ? arrivalTemp.ADULT : 0;
          arrivalCounter = arrivalCounter + parseInt(arrival.adult)
          arrival.child = arrivalTemp.CHILD ? arrivalTemp.CHILD : 0;
          arrivalCounter = arrivalCounter + parseInt(arrival.child)
          arrival.ctew = arrivalTemp.CREW ? arrivalTemp.CREW : 0;
          arrivalCounter = arrivalCounter + parseInt(arrival.ctew)
          arrival.divert = arrivalTemp.DIVERT ? arrivalTemp.DIVERT : 0;
          arrivalCounter = arrivalCounter + parseInt(arrival.divert)
          arrival.exCrew = arrivalTemp.EXTRA_CREW ? arrivalTemp.EXTRA_CREW : 0;
          arrivalCounter = arrivalCounter + parseInt(arrival.exCrew)
          arrival.infant = arrivalTemp.INFANT ? arrivalTemp.INFANT : 0;
          arrivalCounter = arrivalCounter + parseInt(arrival.infant)
          arrival.missed = arrivalTemp.MISSED ? arrivalTemp.MISSED : 0;
          arrivalCounter = arrivalCounter + parseInt(arrival.missed)
          arrival.transfer = arrivalTemp.TRANSFER ? arrivalTemp.TRANSFER : 0;
          arrivalCounter = arrivalCounter + parseInt(arrival.transfer)
          arrival.transit = arrivalTemp.TRANSIT ? arrivalTemp.TRANSIT : 0;
          arrivalCounter = arrivalCounter + parseInt(arrival.transit)
          arrival.counter = arrivalCounter.toString()
        }

        if (departureTemp) {
          departure.adult = departureTemp.ADULT ? departureTemp.ADULT : 0;
          departureCounter = departureCounter + parseInt(departure.adult)
          departure.child = departureTemp.CHILD ? departureTemp.CHILD : 0;
          departureCounter = departureCounter + parseInt(departure.child)
          departure.ctew = departureTemp.CREW ? departureTemp.CREW : 0;
          departureCounter = departureCounter + parseInt(departure.ctew)
          departure.divert = departureTemp.DIVERT ? departureTemp.DIVERT : 0;
          departureCounter = departureCounter + parseInt(departure.divert)
          departure.exCrew = departureTemp.EXTRA_CREW ? departureTemp.EXTRA_CREW : 0;
          departureCounter = departureCounter + parseInt(departure.exCrew)
          departure.infant = departureTemp.INFANT ? departureTemp.INFANT : 0;
          departureCounter = departureCounter + parseInt(departure.infant)
          departure.missed = departureTemp.MISSED ? departureTemp.MISSED : 0;
          departureCounter = departureCounter + parseInt(departure.missed)
          departure.transfer = departureTemp.TRANSFER ? departureTemp.TRANSFER : 0;
          departureCounter = departureCounter + parseInt(departure.transfer)
          departure.transit = departureTemp.TRANSIT ? departureTemp.TRANSIT : 0;
          departureCounter = departureCounter + parseInt(departure.transit)
          departure.counter = departureCounter.toString()
        }
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

  getCargo() {
    return new Promise((resolve, reject) => {
      this.flightActivityService.getFlightCargo(this.props).subscribe((res: any) => {
        let data = res.data
        let arrivalTemp = data.ARRIVAL;
        let departureTemp = data.DEPARTURE;

        let arrival = this.cargo.arrival;
        let departure = this.cargo.departure;

        if (arrivalTemp) {
          arrival.baggage = arrivalTemp.BAGGAGE ? arrivalTemp.BAGGAGE : 0
          arrival.cargo = arrivalTemp.CARGO ? arrivalTemp.CARGO : 0
          arrival.pos = arrivalTemp.POS ? departureTemp.POS : 0
        }
        if (departureTemp) {
          departure.baggage = departureTemp.BAGGAGE ? departureTemp.BAGGAGE : 0
          departure.cargo = departureTemp.CARGO ? departureTemp.CARGO : 0
          departure.pos = departureTemp.POS ? departureTemp.POS : 0
        }

        this.cargo.arrival = arrival;
        this.cargo.departure = departure;
        console.log(this.cargo)
        let localCargo = JSON.stringify(this.cargo)
        localStorage.setItem('cargo', localCargo)
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
            text: key + " " + data.VALUE[key]
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
            inBlock: x.ON_BLOCK_TIME ? moment(x.ON_BLOCK_TIME).format("D MMMM YYYY hh:mm") : "",
            offBlock: x.OFF_BLOCK_TIME ? moment(x.OFF_BLOCK_TIME).format("D MMMM YYYY hh:mm") : "",
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
          listVal['START'] = listVal['START'] ? moment(listVal['START']).format("D MMMM YYYY hh:mm") : ""
          listVal['END'] = listVal['END'] ? moment(listVal['END']).format("D MMMM YYYY hh:mm") : ""

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

  getEstimateBilling() {
    return new Promise((resolve, reject) => {
      let param = {
        afskey: this.flightInfo.id,
        branchcode: this.flightInfo.detailTemp.arrival.BRANCH_CODE
      }
      this.flightActivityService.getEstimateBilling(param).subscribe((res: any) => {
        let data = res.data
        this.estimateBilling.invoice = []
        let totalPrice = 0
        if (data.INVOICE) {
          data.INVOICE.map(x => {
            let bodyVal = x

            let price = x.REVENUE_IDR ? x.REVENUE_IDR : 0
            totalPrice = totalPrice + parseFloat(price)

            let product1 = x.PRODUCTION_1 ? parseFloat(x.PRODUCTION_1) : 0
            let product2 = x.PRODUCTION_2 ? parseFloat(x.PRODUCTION_2) : 0
            let productTotal = product1 + product2
            bodyVal['PRODUCTION'] = productTotal
            let priceField = bodyVal['REVENUE_IDR'] ? bodyVal['REVENUE_IDR'] : "0"
            bodyVal['REVENUE_FORMAT'] = this.generalService.formatterInput(priceField, "IDR ")

            this.estimateBilling.invoice.push(bodyVal)
          })
        }

        this.estimateBilling.totalPrice = this.generalService.formatterInput(totalPrice.toString(), "IDR ")
        if (data.TOTAL_INVOICE) {
          this.estimateBilling.total = data.TOTAL_INVOICE
        }

        if (data.HEADER) {
          this.estimateBilling.invoice = data.INVOICE
        }
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

  back() {
    let url = localStorage.getItem("flightList")
    this.router.navigateByUrl(url)
  }

  onSubmitBilling() {
    // let body = {
    //   "afskey": this.flightInfo.id
    // }
    // this.flightActivityService.submitEstimateBilling(body).subscribe((res: any) => {
    //   this.generalService.notification("SUKSES")
    //   this.back()
    // },
    //   error => {
    //     if (error.response) {
    //       this.generalService.notification(error.response.message)
    //     }
    //     else {
    //       this.generalService.notification("ERROR CONNECTION")
    //     }
    //   }
    // );
    console.log("submit")
    this.back()
  }
}
