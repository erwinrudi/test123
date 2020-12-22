import { Component } from '@angular/core';
import { GeneralService } from "../../general.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-menu',
  templateUrl: 'create-menu.page.html',
  styleUrls: ['create-menu.page.scss']
})
export class CreateMenuPage {

  constructor(
    private generalService: GeneralService,
    private router: Router
  ) {}

  
  back() {
    this.router.navigateByUrl("/flight/flight-menu")
  }

}
