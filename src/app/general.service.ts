import { Injectable, AfterViewChecked } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { environment } from './../environments/environment';
import 'rxjs/Rx';
// tslint:disable-next-line:import-blacklist
import { Observable, Subject } from 'rxjs';
import { ToastController } from '@ionic/angular';

import { LoadingController } from '@ionic/angular';
@Injectable()
export class GeneralService {
    readonly apiUrl: string = environment.apiUrl;
    readonly urlImg: string = environment.urlImg;
    loaderToShow: any;
    token: string;
    private permissions = new Subject<any>();
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        public toastController: ToastController,
        public loadingController: LoadingController
    ) { }

    setPermissions(permissions: any) {
        localStorage.setItem('permissions', JSON.stringify(permissions));
        this.permissions.next(permissions);
    }

    /**
     * Get Permissions Local Storage for Default Value
     */
    getPermissionsLocal() {
        const permissions = JSON.parse(localStorage.getItem('permissions'));
        if (!permissions) {
            // this.logout();
            return [];
        } else {
            return permissions;
        }
    }

    getPermissions(): Observable<any> {
        return this.permissions.asObservable();
    }


    goBack() {
        this.location.back();
    }

    isAuthenticated() {
        // console.log('Checking Login');

        // If token exist
        if (localStorage.getItem('token')) {
            this.token = localStorage.getItem('token'); // Get Token
            return true
        }
        console.log('Token missing');

        return false;
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['/']);
    }

    redirectHome(){
        this.router.navigateByUrl("/")
    }

    permissionCekker(value = "") {
        let permission = this.getPermissionsLocal()
        let isPermis = permission.find(x => x == value)
        if (isPermis) {
            return true
        }
        return false
    }

    formatterValue(value = '0', maxValue = '999999999', Currency = 'Rp. ', digitSplit = 3, point = ',') {
        // debugger
        var angka = value.replace(/,/g, '');
        angka = angka.replace(Currency, '');
        angka = angka.replace(/\D/g, '');
        return angka
    }

    formatterInput(value = '0', Currency = '', point = ',', floatPoint = '.') {
        // debugger

        let angkaTemp = value.split(floatPoint);
        let decimalVal = ""
        var angka;
        // debugger
        if (angkaTemp.length > 1) {
            angka = angkaTemp[0]
            angka = angka.replace(/,/g, '');
            angka = angka.replace(Currency, '');
            angka = angka.replace(/\D/g, '');
            decimalVal = floatPoint + angkaTemp[1]
        }
        else {
            angka = value.replace(/,/g, '');
            angka = angka.replace(Currency, '');
            angka = angka.replace(/\D/g, '');
            decimalVal = ""
        }

        var maxValue = '9999999999';
        var digitSplit = 3;


        if (parseInt(angka) > parseInt(maxValue)) {
            angka = maxValue
        }
        var lengthString = angka.length
        if (lengthString <= digitSplit) {
            if (angka == "") {
                return Currency + "0"
            }
            else {
                return Currency + parseInt(angka)
            }
        }
        if (lengthString > digitSplit) {
            var tempAngka = angka
            var digitSplice = lengthString % digitSplit
            tempAngka = tempAngka.slice(digitSplice)
            var tempLength = tempAngka.length
            var index = 0
            var splitter = []
            var hasil = ''

            for (var i = 0; i < tempLength; i++) {
                if (i % digitSplit == 0) {
                    hasil = hasil + point + tempAngka[i]
                }
                else {
                    hasil = hasil + tempAngka[i]
                }
            }
            if (digitSplice == 0) {
                hasil = hasil.replace(',', '');
            }
            else {
                for (var j = digitSplice; j >= 1; j--) {
                    // debugger
                    hasil = angka[j - 1] + hasil
                }
            }


            hasil = Currency + hasil + decimalVal
            return hasil
        }
    }

    async notification(messages = "ERROR CONNECTION") {
        const toast = await this.toastController.create({
            message: messages,
            duration: 3000
        });
        toast.present();
    }
}