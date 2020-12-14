import { Component } from '@angular/core';
import { GeneralService } from "../../general.service";

@Component({
  selector: 'app-billing-menu',
  templateUrl: 'billing-menu.page.html',
  styleUrls: ['billing-menu.page.scss']
})
export class BillingMenuPage {

  constructor(
    private generalService: GeneralService
  ) {}

}
