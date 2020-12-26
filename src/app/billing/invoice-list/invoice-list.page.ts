import { Component } from '@angular/core';
import { GeneralService } from "../../general.service";
import * as moment from "moment";
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-invoice-list',
  templateUrl: 'invoice-list.page.html',
  styleUrls: ['invoice-list.page.scss']
})
export class InvoiceListPage {

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
    }
  ];

  search: any = {
    startDate: '',
    endDate: '',
    flightNumber: '',
    status: ''
  }

  billingList: any = [
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
        if (prop.field == 'startdate' || prop.field == 'enddate') {
          tempProp[index].value = moment(params[prop.field], "YYYY-MM-DDTHH:mmZ").format("YYYY-MM-DD")
        }
        else {
          tempProp[index].value = params[prop.field]
        }
      }
    })
  }

  getData() {
    
  }

  onClickList(value) {
    this.router.navigateByUrl("/billing/invoice-detail")
  }
  
  back() {
    this.router.navigateByUrl("/billing/invoice-search")
  }
}
