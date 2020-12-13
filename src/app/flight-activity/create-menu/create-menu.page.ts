import { Component } from '@angular/core';
import { GeneralService } from "../../general.service";

@Component({
  selector: 'app-create-menu',
  templateUrl: 'create-menu.page.html',
  styleUrls: ['create-menu.page.scss']
})
export class CreateMenuPage {

  constructor(
    private generalService: GeneralService
  ) {}

  
}
