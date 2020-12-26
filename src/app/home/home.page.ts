import { Component } from '@angular/core';
import * as moment from "moment";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(
      private activatedRoute: ActivatedRoute
  ) {
    this.getQueryParams();
  }

  getQueryParams() {
    const params = this.activatedRoute.snapshot.queryParams;
    if(typeof params.token != "undefined") {
      let getToken = params.token;
      alert(getToken);
    }
  }

}
