import { Component } from '@angular/core';
import { GeneralService } from "../../general.service";
import * as moment from "moment";
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-menu',
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

  search: any = {
    startDate: '',
    endDate: '',
    flightNumber: '',
    status: ''
  }

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
      stad: "STAD: 5 Nov 2020 09:00",
    },
    {
      id: 0,
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
      stad: "STAD: 5 Nov 2020 09:00",
    }
  ]

  constructor(
    private generalService: GeneralService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.getQueryParams();
  }

  getQueryParams() {
    const params = this.activatedRoute.snapshot.queryParams;
    let tempProp = this.props
    this.props.map((prop, index) => {
      if (params[prop.field]) {
        tempProp[index].value = params[prop.field]
      }
    })
  }

  getData() {

  }
}
