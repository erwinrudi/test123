import { Injectable, AfterViewChecked } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { environment } from './../environments/environment';
import 'rxjs/Rx';
// tslint:disable-next-line:import-blacklist
import { Observable, Subject } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Injectable()
export class GeneralService {
    readonly apiUrl: string = environment.apiUrl;


    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        public toastController: ToastController
    ) { }


    goBack() {
        this.location.back();
    }

    async notification(messages = "test") {
        const toast = await this.toastController.create({
            message: messages,
            duration: 3000
        });
        toast.present();
    }
}