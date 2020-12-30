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

  constructor(
    private generalService: GeneralService,
    private router: Router,
    public alertController: AlertController
  ) {}

  
  back() {
    this.router.navigateByUrl("/flight/flight-menu")
  }

  
  async singleClick() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
