import { Component } from '@angular/core';
import * as moment from "moment";
import { ActivatedRoute } from "@angular/router";
import { HomeService } from './home.service';
import { GeneralService } from "../general.service";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService : HomeService,
    private generalService: GeneralService,
  ) {
    this.getQueryParams();
  }

  getQueryParams() {
    const params = this.activatedRoute.snapshot.queryParams;
    if (typeof params.token != "undefined") {
      let getToken = params.token;
      localStorage.setItem('token', getToken)

      this.homeService.getDataUser(getToken).subscribe((rows: any) => {
        debugger
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
  }

}
