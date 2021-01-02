import { Component, OnInit } from '@angular/core';
import { GeneralService } from "../../general.service";
import * as moment from "moment";
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ReportService } from './../report.service';

@Component({
  selector: 'app-report-list',
  templateUrl: 'report-list.page.html',
  styleUrls: ['report-list.page.scss']
})
export class ReportListPage {

  isLoading: boolean;

  props: any = [
    {
      field: 'startdate',
      value: ''
    },
    {
      field: 'enddate',
      value: ''
    },
    {
      field: 'flightno',
      value: ''
    },
    {
      field: 'status',
      value: ''
    }
  ];

  reportList = {
    Estimate: [
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
      }
    ],
    Invoice: [
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
    ],
    Achive: [
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

  tabList = [
    'Estimate',
    'Invoice',
    'Achive'
  ]

  tabsChoose = 'Estimate'

  constructor(
    private generalService: GeneralService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router,
    private reportService: ReportService
  ) {
    let canRead = this.generalService.permissionCekker("read_report")
    if (canRead == false) {
      this.router.navigateByUrl("/")
    }
    else {
      activatedRoute.params.subscribe(val => {
        this.getQueryParams();
        this.getData();
      })
    }
  }

  ngOnInit() {

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

  tabsClick(val = "Estimate") {
    this.tabsChoose = val
  }

  getData() {

  }

  onClickList(value) {
    let urlNext = "/flight/flight-detail"
    let arrival = value.ARRIVAL.AFSKEY ? value.ARRIVAL.AFSKEY : ""
    let derpature = value.DEPARTURE.AFSKEY ? value.DEPARTURE.AFSKEY : ""
    let afs = value.REMARK ? value.REMARK : ""
    urlNext = urlNext + "?codeArrival=" + arrival
    urlNext = urlNext + "&codeDeparture=" + derpature
    urlNext = urlNext + "&afsKey=" + afs
    localStorage.setItem("flightDetail", urlNext)
    this.router.navigateByUrl(urlNext)
  }

  back() {
    this.router.navigateByUrl("/report/report-search")
  }

}
