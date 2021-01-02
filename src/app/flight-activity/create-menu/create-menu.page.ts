import { Component } from '@angular/core';
import { GeneralService } from "../../general.service";
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-menu',
  templateUrl: 'create-menu.page.html',
  styleUrls: ['create-menu.page.scss']
})

export class CreateMenuPage {

  showSingle = false
  constructor(
    private generalService: GeneralService,
    private router: Router,
    public alertController: AlertController
  ) { }


  back() {
    this.router.navigateByUrl("/flight/flight-menu")
  }


  singleClick() {
    this.showSingle = !this.showSingle
  }

  redirectSingle(val = "A") {
    this.router.navigateByUrl("/flight/create-single?leg=" + val)
  }
}
