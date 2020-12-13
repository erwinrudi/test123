import { Component } from '@angular/core';
import { GeneralService } from "../../general.service";
import * as moment from "moment";

@Component({
  selector: 'app-list-menu',
  templateUrl: 'flight-list.page.html',
  styleUrls: ['flight-list.page.scss']
})
export class FlightListPage {

  constructor(
    private generalService: GeneralService
  ) {}

  ngOnInit() {
  }
}
