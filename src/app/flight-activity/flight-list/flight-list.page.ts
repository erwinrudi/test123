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

  flightList: any = [

  ]

  constructor(
    private generalService: GeneralService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router,
    private flightActivityService: FlightActivityService
  ) {
    activatedRoute.params.subscribe(val => {
      this.getQueryParams();
      this.getData();
    })
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

  getData() {
    this.flightActivityService.getListFlight(this.props).subscribe((rows: any) => {
      let data = rows.data
      rows.data.map((x,index) => {
        data[index]['STADFOR'] = moment(x.ARRIVAL.STAD).format("D MMMM YYYY hh:mm")
      })
      this.flightList = data;
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
    this.router.navigateByUrl("/flight/schedule-search")
  }

}
