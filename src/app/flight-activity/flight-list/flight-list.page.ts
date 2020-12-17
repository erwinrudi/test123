import { Component, OnInit } from '@angular/core';
import { GeneralService } from "../../general.service";
import * as moment from "moment";
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlightActivityService } from './../flight-activity.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: 'flight-list.page.html',
  styleUrls: ['flight-list.page.scss']
})
export class FlightListPage {

  isLoading: boolean;

  props: any = [
    {
      field: 'startDate',
      value: ''
    },
    {
      field: 'endDate',
      value: ''
    },
    {
      field: 'flightNumber',
      value: ''
    },
    {
      field: 'status',
      value: ''
    }
  ];

  flightList: any = [
    {
      id: 0,
      status: "Complete",
      arrival: {
        flightNo: 'GA 001',
        flightType: 'Int',
        from: 'CGK',
        to: 'SIN'
      },
      derpature: {
        flightNo: 'GA 001',
        flightType: 'Int',
        from: 'SIN',
        to: 'CGK'
      },
      stad: "5 Nov 2020 09:00",
    },
    {
      id: 1,
      status: "Complete",
      arrival: {
        flightNo: 'GA 002',
        flightType: 'Int',
        from: 'CGK',
        to: 'SIN'
      },
      derpature: {
        flightNo: 'GA 002',
        flightType: 'Int',
        from: 'SIN',
        to: 'CGK'
      },
      stad: "5 Nov 2020 09:00",
    }
  ]

  constructor(
    private generalService: GeneralService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router,
    private flightActivityService: FlightActivityService
  ) { }

  ngOnInit() {
    this.getQueryParams();
    this.getData();
  }

  getQueryParams() {
    const params = this.activatedRoute.snapshot.queryParams;
    let tempProp = this.props
    this.props.map((prop, index) => {
      if (params[prop.field]) {
        if (prop.field == 'startDate' || prop.field == 'endDate') {
          tempProp[index].value = moment(params[prop.field], "YYYY-MM-DDTHH:mmZ").format("YYYY/MM/DD")
        }
        else {
          tempProp[index].value = params[prop.field]
        }
      }
    })
  }

  getData() {
    this.flightActivityService.getListFlight(this.props).subscribe((rows: any) => {
      
    },
      error => {
        if(error.response){

        }
        else{
          this.generalService.notification("ERROR CONNECTION")
        }
      }
    );
  }
}
