import { Component } from '@angular/core';
import { GeneralService } from "../../general.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-billing-menu',
  templateUrl: 'billing-menu.page.html',
  styleUrls: ['billing-menu.page.scss']
})
export class BillingMenuPage {

  constructor(
    private generalService: GeneralService,
    private router: Router
  ) {}

  back(){
    this.router.navigateByUrl("/")
  }
}
