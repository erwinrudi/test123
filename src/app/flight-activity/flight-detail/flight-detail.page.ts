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
      afskey: ''
    },
    departure:  {
      terminal: '',
      flightNo: '',
      flightType: '',
      from: '',
      to: '',
      ata: '',
      eta: '',
      regNo: '',
      remark: '',
      afskey: ''
    }
  };

  pax = {
    type: 'arrival',
    id: 0,
    arrival: {
      adult: 50,
      child: 10,
      infant: 50,
      transit: 10,
      transfer: 50,
      ctew: 10,
      exCrew: 50,
      divert: 10,
      missed: 50,
      counter: 10
    },

    departure: {
      adult: 50,
      child: 10,
      infant: 50,
      transit: 10,
      transfer: 50,
      ctew: 10,
      exCrew: 50,
      divert: 10,
      missed: 50,
      counter: 10
    }
  };

  movementList = [
    {
      id: '0',
      title: 'Flight Activity Movement',
      inBlock: '25 November 2020 9.10',
      offBlock: '25 November 2020 9.10',
      standCode: 'A1',
      movType: 'Normal'
    },
    {
      id: '1',
      title: 'Flight Activity Movement',
      inBlock: '26 November 2020 9.10',
      offBlock: '26 November 2020 9.10',
      standCode: 'A2',
      movType: 'Normal'
    }
  ];

  avio = {
    id: 0,
    arrival: {
      startTime: '25 November 2020 9.10',
      endTime: '25 November 2020 10.10',
      frq: '1',
      mov: '1'
    },
    departure: {
      startTime: '26 November 2020 9.10',
      endTime: '26 November 2020 10.10',
      frq: '2',
      mov: '2'
    }
  }

  constructor(
    private generalService: GeneralService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router,
    private flightActivityService: FlightActivityService
  ) { }

  ngOnInit() {
    this.getQueryParams();
    this.getDetail();
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
        }
        tempProp[index].value = params[prop.field]
      }
    })
  }

  getDetail() {
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

      this.flightInfo.arrival = arrival
      this.flightInfo.departure = departure
      //map UI
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

  getPax(){
    
  }
}
