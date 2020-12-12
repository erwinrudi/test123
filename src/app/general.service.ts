import { Injectable, AfterViewChecked } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
// tslint:disable-next-line:import-blacklist
import { Observable, Subject } from 'rxjs';

@Injectable()
export class GeneralService {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) { }


    goBack() {
        this.location.back();
    }
}