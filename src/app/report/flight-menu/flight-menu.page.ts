import { Component } from '@angular/core';
import { GeneralService } from "../../general.service";

@Component({
  selector: 'app-flight-menu',
  templateUrl: 'flight-menu.page.html',
  styleUrls: ['flight-menu.page.scss']
})
export class FlightMenuPage {

  constructor(
    private generalService: GeneralService
  ) {}

}
