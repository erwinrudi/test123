import { Component } from '@angular/core';
import { GeneralService } from "../../general.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-flight-menu',
  templateUrl: 'flight-menu.page.html',
  styleUrls: ['flight-menu.page.scss']
})
export class FlightMenuPage {

  constructor(
    private generalService: GeneralService,
    private router: Router
  ) {
  }

  back(){
    this.router.navigateByUrl("/")
  }

}
